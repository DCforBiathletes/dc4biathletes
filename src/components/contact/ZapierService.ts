
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
  
  // Create the payload with the exact format specified
  const payload = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    pageURL: window.location.href
  };
  
  debugLog += `Payload: ${JSON.stringify(payload, null, 2)}\n`;
  
  try {
    // Send data using fetch with POST method
    debugLog += `Sending fetch request to webhook\n`;
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    debugLog += `Response status: ${response.status}\n`;
    
    // Try to get response text if available
    try {
      const responseText = await response.text();
      debugLog += `Response: ${responseText}\n`;
    } catch (responseError) {
      debugLog += `Could not read response: ${responseError}\n`;
    }
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to webhook: ${error}\n`;
    console.error("Error sending data to webhook:", error);
    return { success: false, debugLog };
  }
};
