
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
    
    // Use ContentType application/json for Google Apps Script doPost method
    // The script expects data in postData.contents
    const response = await fetch(webhookUrl, {
      method: 'POST',
      mode: 'cors', // Try regular cors mode first
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    debugLog += `Response received. Status: ${response.status}\n`;
    
    try {
      const responseData = await response.json();
      debugLog += `Response data: ${JSON.stringify(responseData)}\n`;
      return { success: true, debugLog };
    } catch (parseError) {
      debugLog += `Could not parse response as JSON. Response might be empty or not JSON format.\n`;
      // If we got here but still received a successful status code, consider it a success
      return { success: response.ok, debugLog };
    }
  } catch (error) {
    debugLog += `Error: ${error}\n`;
    debugLog += `Attempting fallback with no-cors mode...\n`;
    
    try {
      // Fallback to no-cors mode if the regular request fails
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      debugLog += `Fallback request sent with no-cors mode. Cannot access response details.\n`;
      return { success: true, debugLog };
    } catch (fallbackError) {
      debugLog += `Fallback also failed: ${fallbackError}\n`;
      console.error("Error sending data to webhook:", fallbackError);
      return { success: false, debugLog };
    }
  }
};
