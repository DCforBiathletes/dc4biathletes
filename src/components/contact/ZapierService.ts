
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
    
    // Second attempt: Using server-side data parameter - without creating visible DOM elements
    debugLog += `Attempting URL parameter approach\n`;
    
    try {
      // Create a URL object with the parameters
      const url = new URL(zapierWebhookUrl);
      url.searchParams.append('data', JSON.stringify(payload));
      
      // Use a simple image method that doesn't trigger visible elements
      const img = new Image();
      img.style.display = 'none';
      img.src = url.toString();
      
      debugLog += `Image approach sent\n`;
    } catch (imgError) {
      debugLog += `Image approach failed: ${imgError}\n`;
    }
    
    // Third attempt: XHR approach as final backup
    debugLog += `Attempting XHR approach as final backup\n`;
    
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', zapierWebhookUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(payload));
      
      debugLog += `XHR approach sent\n`;
    } catch (xhrError) {
      debugLog += `XHR approach failed: ${xhrError}\n`;
    }
    
    debugLog += `All approaches attempted. Check Zapier logs to confirm receipt.\n`;
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to Zapier: ${error}\n`;
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog };
  }
};
