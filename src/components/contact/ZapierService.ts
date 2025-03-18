
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
    // Try direct JSON POST first
    debugLog += `Sending JSON directly to Google Apps Script\n`;
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // No no-cors here to get proper responses, but handle potential CORS errors
    }).catch(error => {
      debugLog += `Fetch error with direct JSON: ${error}\n`;
      throw error;
    });
    
    if (response.ok) {
      debugLog += `Request successful with JSON approach\n`;
      return { success: true, debugLog };
    } else {
      debugLog += `Request failed with status: ${response.status}\n`;
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    debugLog += `Error with direct JSON approach: ${error}\n`;
    debugLog += `Falling back to URL-encoded form submission...\n`;
    
    try {
      // Use URL-encoded form data as fallback
      const formDataParams = new URLSearchParams();
      formDataParams.append('data', JSON.stringify(payload));
      
      debugLog += `Sending URL-encoded form data to Google Apps Script\n`;
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataParams,
        mode: 'no-cors', // Use no-cors for this fallback approach
      }).catch(error => {
        debugLog += `Fetch error with form data: ${error}\n`;
        throw error;
      });
      
      debugLog += `Form data request sent (no response details available due to no-cors mode)\n`;
      
      // Since we're using no-cors, we can't check response status
      return { success: true, debugLog };
    } catch (finalError) {
      debugLog += `All approaches failed. Final error: ${finalError}\n`;
      debugLog += `Attempting last-resort iframe approach...\n`;
      
      try {
        // Create a form element for iframe submission as last resort
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
        
        debugLog += `Submitting iframe form to Google Apps Script\n`;
        
        // Add form to document, submit it, and then remove it
        document.body.appendChild(form);
        form.submit();
        
        // Set a timeout to consider the submission successful
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        debugLog += `Iframe form submitted successfully\n`;
        
        // Clean up
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        
        return { success: true, debugLog };
      } catch (iframeError) {
        debugLog += `Iframe submission error: ${iframeError}\n`;
        console.error("Error sending data to webhook:", iframeError);
        return { success: false, debugLog };
      }
    }
  }
};
