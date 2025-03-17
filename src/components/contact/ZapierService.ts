
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
    // Send data using the fetch API with POST method and no-cors mode
    const response = await fetch(zapierWebhookUrl, {
      method: 'POST', // Explicitly using POST method
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    debugLog += "\nRequest sent successfully with POST method";
    return { success: true, debugLog: debugLog };
  } catch (error) {
    console.error("Error sending data to Zapier:", error);
    debugLog += `\nError: ${error}`;
    return { success: false, debugLog: debugLog };
  }
};
