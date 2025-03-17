
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
    // Direct fetch approach - This is the most reliable for Zapier/Google Sheets
    debugLog += `Attempting direct fetch to Zapier webhook\n`;
    
    try {
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        debugLog += `Direct fetch successful with status: ${response.status}\n`;
      } else {
        debugLog += `Direct fetch returned status: ${response.status}\n`;
      }
    } catch (fetchError) {
      debugLog += `Direct fetch failed, switching to no-cors mode: ${fetchError}\n`;
      
      // Fallback to no-cors mode
      await fetch(zapierWebhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      debugLog += `no-cors fetch request sent\n`;
    }
    
    // Form data approach as a backup - more compatible with Google Sheets
    debugLog += `Using form data approach as backup\n`;
    
    // Create a form data object to ensure proper Google Sheets mapping
    const formData = new FormData();
    
    // Add each field to form data - this format works better with Google Sheets
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, typeof value === 'string' ? value : JSON.stringify(value));
    });
    
    // Send the form data via XHR
    const sendFormXHR = new Promise<void>((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', zapierWebhookUrl, true);
      xhr.onload = () => {
        debugLog += `Form XHR completed with status: ${xhr.status}\n`;
        resolve();
      };
      xhr.onerror = () => {
        debugLog += `Form XHR failed\n`;
        resolve();
      };
      xhr.send(formData);
    });
    
    await sendFormXHR;
    
    debugLog += `All approaches attempted. Check Zapier logs to confirm receipt.\n`;
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to Zapier: ${error}\n`;
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog };
  }
};
