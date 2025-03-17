
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
    // Use fetch without expecting a response due to no-cors mode
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST',
      mode: 'no-cors', // This prevents CORS issues but also means we won't get a proper response
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    // Since we're using no-cors mode, we won't get a proper response object we can check
    // We'll assume success if we reach this point (no exception thrown)
    return { success: true, debugLog: "Form submission likely sent successfully" };
  } catch (error) {
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog: `Error: ${error}` };
  }
};
