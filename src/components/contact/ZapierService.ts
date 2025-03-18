
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
    // For Google Apps Script, we need to use 'no-cors' mode
    debugLog += `Sending fetch request to webhook\n`;
    
    // Use URLSearchParams for Google Apps Script which works better than JSON for GET deployments
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, value as string);
    });
    
    // Add a cache-busting parameter to prevent caching
    params.append('_cb', Date.now().toString());
    
    // Construct the full URL with query parameters
    const fullUrl = `${webhookUrl}?${params.toString()}`;
    debugLog += `Full URL with params: ${fullUrl}\n`;
    
    // Send data using fetch with GET method and no-cors mode for Google Apps Script
    const response = await fetch(fullUrl, {
      method: 'GET',
      mode: 'no-cors', // This is crucial for Google Apps Script
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
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
