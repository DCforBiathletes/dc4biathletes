
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
    // Use native fetch with no-cors to avoid any debug windows
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    await fetch(zapierWebhookUrl, {
      method: 'POST',
      mode: 'no-cors', // Prevents CORS issues
      cache: 'no-cache',
      credentials: 'omit', // Don't send cookies
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return { success: true, debugLog: "Form submission sent successfully" };
  } catch (error) {
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog: `Error: ${error}` };
  }
};
