
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
    // First attempt: Standard fetch with no-cors mode
    debugLog += `Attempting standard fetch with no-cors mode\n`;
    
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
    
    // Second attempt: Using JSONP-like approach
    const jsonpUrl = `${zapierWebhookUrl}?data=${encodeURIComponent(JSON.stringify(payload))}`;
    debugLog += `Attempting JSONP-like approach with URL: ${jsonpUrl}\n`;
    
    // Create a script element to load the URL
    const script = document.createElement('script');
    script.src = jsonpUrl;
    document.body.appendChild(script);
    
    // Remove script after a short delay
    setTimeout(() => {
      document.body.removeChild(script);
    }, 5000);
    
    // Third attempt: Form submission approach
    debugLog += `Attempting form submission approach as backup\n`;
    const formElement = document.createElement('form');
    formElement.method = 'POST';
    formElement.action = zapierWebhookUrl;
    formElement.target = '_blank';
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
    setTimeout(() => {
      document.body.removeChild(formElement);
    }, 5000);
    
    debugLog += `All three approaches attempted. Check Zapier logs to confirm receipt.\n`;
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to Zapier: ${error}\n`;
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog };
  }
};
