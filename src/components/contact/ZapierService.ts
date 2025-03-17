
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
  let debugLog = `Sending data to Zapier webhook\n`;
  
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
  
  try {
    // Using a simpler fetch approach similar to the example
    fetch(zapierWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    
    // Since the webhook doesn't return a meaningful response with Zapier,
    // we'll assume success if no error is thrown
    debugLog += "\nRequest sent with simple fetch approach";
    return { success: true, debugLog: debugLog };
  } catch (error) {
    console.error("Error sending data to Zapier:", error);
    debugLog += `\nError: ${error}`;
    return { success: false, debugLog: debugLog };
  }
};
