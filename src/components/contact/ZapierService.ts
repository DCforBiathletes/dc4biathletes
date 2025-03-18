
export type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const triggerZapierWebhook = async (
  webhookUrl: string,
  formData: FormValues
): Promise<{ success: boolean; debugLog: string }> => {
  let debugLog = `Sending data to webhook: ${webhookUrl}\n`;
  
  // Format data for Google Apps Script
  const payload = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString(),
    pageURL: window.location.href
  };
  
  debugLog += `Payload: ${JSON.stringify(payload, null, 2)}\n`;
  
  try {
    debugLog += `Sending fetch request to webhook\n`;
    
    // For Google Apps Script, we need to send JSON payload in POST request
    const response = await fetch(webhookUrl, {
      method: 'POST',
      mode: 'no-cors', // Still using no-cors for cross-origin requests
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    // When using no-cors mode, we can't access response properties
    debugLog += `Request sent with no-cors mode, unable to access response details\n`;
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to webhook: ${error}\n`;
    console.error("Error sending data to webhook:", error);
    return { success: false, debugLog };
  }
};
