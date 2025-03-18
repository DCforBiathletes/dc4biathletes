
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
  
  // Create a form element
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = webhookUrl;
  form.target = '_blank'; // This prevents page navigation
  form.style.display = 'none';
  
  // Add data as a hidden input field
  const dataInput = document.createElement('input');
  dataInput.type = 'hidden';
  dataInput.name = 'data';
  dataInput.value = JSON.stringify(payload);
  form.appendChild(dataInput);
  
  // Create a hidden iframe to catch the response
  const iframe = document.createElement('iframe');
  iframe.name = '_blank';
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  
  debugLog += `Submitting form to Google Apps Script\n`;
  
  try {
    // Add form to document, submit it, and then remove it
    document.body.appendChild(form);
    form.submit();
    
    // Set a timeout to consider the submission successful
    // since we can't easily get the response from the iframe
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    debugLog += `Form submitted successfully\n`;
    
    // Clean up
    document.body.removeChild(form);
    document.body.removeChild(iframe);
    
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error: ${error}\n`;
    
    // Clean up
    if (document.body.contains(form)) {
      document.body.removeChild(form);
    }
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
    
    console.error("Error sending data to webhook:", error);
    return { success: false, debugLog };
  }
};
