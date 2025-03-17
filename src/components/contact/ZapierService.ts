
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
  
  // Create the payload
  const payload = {
    pageTitle: "Contact Form Submission",
    pageURL: window.location.href,
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString(),
    source: window.location.origin,
  };
  
  debugLog += `Payload: ${JSON.stringify(payload, null, 2)}\n`;
  
  try {
    console.log("Sending data to Zapier webhook:", zapierWebhookUrl);
    console.log("Payload:", payload);
    
    // Use fetch with no-cors mode to handle CORS issues
    debugLog += `Using fetch with no-cors mode\n`;
    
    await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors", // This prevents CORS errors but means we can't read the response
      body: JSON.stringify(payload),
    });
    
    // Since we can't check status with no-cors, we assume success
    debugLog += `Request sent with no-cors mode. Cannot verify actual response due to CORS limitations.\n`;
    debugLog += `Zapier webhooks typically return 200 even if the Zap fails internally.\n`;
    debugLog += `Please check your Zapier account to confirm the webhook was triggered.\n`;
    
    console.log("Request to Zapier webhook completed");
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error sending data to Zapier: ${error}\n`;
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog };
  }
};
