
export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const triggerZapierWebhook = async (
  zapierWebhookUrl: string,
  formData: FormValues
): Promise<{ success: boolean; debugLog: string }> => {
  let debugLog = `Sending data to Zapier webhook: ${zapierWebhookUrl}\n`;
  
  // Create the payload with Google Sheets friendly format
  const payload = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString(),
    source: window.location.origin,
    pageTitle: "Contact Form Submission",
    pageURL: window.location.href
  };
  
  debugLog += `Payload: ${JSON.stringify(payload, null, 2)}\n`;
  
  try {
    // Primary approach: XMLHttpRequest in background
    debugLog += `Attempting XMLHttpRequest in background\n`;
    
    // Create a Promise-based XMLHttpRequest
    const sendXHR = new Promise<void>((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', zapierWebhookUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = () => {
        debugLog += `XHR completed with status: ${xhr.status}\n`;
        resolve();
      };
      xhr.onerror = () => {
        debugLog += `XHR failed, but continuing with backup methods\n`;
        resolve();
      };
      xhr.send(JSON.stringify(payload));
    });
    
    // Wait for XHR to complete
    await sendXHR;
    
    // Backup approach: Fetch with no-cors mode
    debugLog += `Attempting fetch with no-cors mode as backup\n`;
    
    try {
      await fetch(zapierWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      debugLog += `Fetch request sent with no-cors mode\n`;
    } catch (fetchError) {
      debugLog += `Fetch attempt failed: ${fetchError}\n`;
    }
    
    // Second backup: Using invisible iframe for submission instead of opening a new tab
    debugLog += `Creating hidden iframe for form submission\n`;
    
    // Create an invisible iframe
    const iframe = document.createElement('iframe');
    iframe.name = 'zapier-hidden-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Create a form targeting the iframe
    const formElement = document.createElement('form');
    formElement.method = 'POST';
    formElement.action = zapierWebhookUrl;
    formElement.target = 'zapier-hidden-iframe'; // Target the hidden iframe
    formElement.style.display = 'none';
    
    // Add each field as a separate form field to ensure Google Sheets compatibility
    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = typeof value === 'string' ? value : JSON.stringify(value);
      formElement.appendChild(input);
    });
    
    // Add form to DOM, submit, then remove
    document.body.appendChild(formElement);
    formElement.submit();
    
    // Clean up after a delay
    setTimeout(() => {
      document.body.removeChild(iframe);
      document.body.removeChild(formElement);
    }, 5000);
    
    debugLog += `All approaches attempted. Check Zapier logs to confirm receipt.\n`;
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to Zapier: ${error}\n`;
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog };
  }
};
