
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
    
    // Use XMLHttpRequest for better debugging since fetch with no-cors doesn't provide response details
    return new Promise<{ success: boolean; debugLog: string }>((resolve) => {
      const xhr = new XMLHttpRequest();
      
      xhr.onreadystatechange = function() {
        debugLog += `XHR State Change: ReadyState: ${xhr.readyState}, Status: ${xhr.status}\n`;
        
        if (xhr.readyState === 4) {
          debugLog += `Response received. Status: ${xhr.status}\n`;
          if (xhr.status >= 200 && xhr.status < 300) {
            debugLog += `Success! Response: ${xhr.responseText}\n`;
            console.log("Successfully sent data to Zapier");
            resolve({ success: true, debugLog });
          } else {
            debugLog += `Error! Response: ${xhr.responseText}\n`;
            console.error("Failed to send data to Zapier", xhr.status, xhr.statusText);
            resolve({ success: false, debugLog });
          }
        }
      };
      
      xhr.open("POST", zapierWebhookUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(payload));
      
      debugLog += "XHR request sent\n";
    });
  } catch (error) {
    debugLog += `Error sending data to Zapier: ${error}\n`;
    console.error("Error sending data to Zapier:", error);
    return { success: false, debugLog };
  }
};
