
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
    
    // For Google Apps Script, add parameter=true to force e.parameter to exist
    const urlWithParam = webhookUrl.includes('?') 
      ? `${webhookUrl}&parameter=true` 
      : `${webhookUrl}?parameter=true`;
    
    debugLog += `Using URL with parameter: ${urlWithParam}\n`;
    
    // First try with regular fetch
    const response = await fetch(urlWithParam, {
      method: 'POST',
      mode: 'cors',
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
      // Add parameter to URL for fallback too
      const urlWithParam = webhookUrl.includes('?') 
        ? `${webhookUrl}&parameter=true` 
        : `${webhookUrl}?parameter=true`;
      
      debugLog += `Using fallback URL with parameter: ${urlWithParam}\n`;
      
      // Fallback to no-cors mode if the regular request fails
      await fetch(urlWithParam, {
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
