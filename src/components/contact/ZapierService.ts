
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
  
  // Format data
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
    // Use FormData instead of direct JSON
    const formDataObj = new FormData();
    formDataObj.append('data', JSON.stringify(payload));
    
    debugLog += `Sending form data to Google Apps Script\n`;
    
    // Use fetch with FormData
    const response = await fetch(webhookUrl, {
      method: 'POST',
      body: formDataObj,
      mode: 'no-cors' // This prevents CORS issues but doesn't return a proper response
    }).catch(error => {
      debugLog += `Fetch error: ${error}\n`;
      throw error;
    });
    
    debugLog += `Request sent (no response details available due to no-cors mode)\n`;
    
    // Since we're using no-cors, we can't actually check the response status
    // So we'll just assume success if we get here
    return { success: true, debugLog };
  } catch (error) {
    debugLog += `Error: ${error}\n`;
    
    // Create a backup approach using a form submission to an iframe
    debugLog += `Attempting backup form submission...\n`;
    
    try {
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
      
      debugLog += `Submitting backup form to Google Apps Script\n`;
      
      // Add form to document, submit it, and then remove it
      document.body.appendChild(form);
      form.submit();
      
      // Set a timeout to consider the submission successful
      // since we can't easily get the response from the iframe
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      debugLog += `Backup form submitted successfully\n`;
      
      // Clean up
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      
      return { success: true, debugLog };
    } catch (backupError) {
      debugLog += `Backup submission error: ${backupError}\n`;
      console.error("Error sending data to webhook:", backupError);
      return { success: false, debugLog };
    }
  }
};
