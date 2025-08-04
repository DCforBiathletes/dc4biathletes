import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ContactForm } from "@/components/contact/ContactForm";
import { ThankYouDialog } from "@/components/contact/ThankYouDialog";
import { DebugDialog } from "@/components/contact/DebugDialog";
import emailjs from 'emailjs-com';

// Define the form values interface
interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [debugInfo, setDebugInfo] = useState<string>("");
  const [showDebugDialog, setShowDebugDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    let debugLog = `Form submission started with EmailJS\n`;
    debugLog += `Form values: ${JSON.stringify(formValues, null, 2)}\n`;
    
    try {
      // Initialize EmailJS with the public key BEFORE sending email
      emailjs.init("vPrSFwIfO2--Bf-TN");
      debugLog += `EmailJS initialized with public key vPrSFwIfO2--Bf-TN\n`;
      
      // Create template parameters with explicit from_email and from_name
      // These MUST match your EmailJS template variable names exactly
      const templateParams = {
        // Sender information (very important for the "From" field)
        from_name: formValues.name,
        from_email: formValues.email, // This is crucial - must be used in template {{from_email}}
        reply_to: formValues.email,
        email: formValues.email,      // Alternative parameter some templates use
        name: formValues.name,        // Alternative parameter some templates use
        
        // Recipient information 
        to_name: "Support Team",
        to_email: "support@example.com", // Set this in your EmailJS template
        recipient: "support@example.com", // Alternative parameter
        email_to: "support@example.com",  // Alternative parameter
        
        // Message content
        subject: formValues.subject,
        message_subject: formValues.subject,
        message: formValues.message,
        message_html: formValues.message,
        
        // Additional metadata
        timestamp: new Date().toISOString(),
        pageURL: window.location.href
      };
      
      debugLog += `Sending auto-reply email with params: ${JSON.stringify(templateParams, null, 2)}\n`;
      
      // Send auto-reply email using the original template
      const autoReplyResult = await emailjs.send(
        'service_dr8f4vk',             // Service ID
        'template_1u4cu5f',            // Template ID for auto-reply
        templateParams,                // Template parameters
        'vPrSFwIfO2--Bf-TN'           // Public Key
      );
      
      debugLog += `Auto-reply EmailJS response: ${JSON.stringify(autoReplyResult, null, 2)}\n`;
      
      // Now send the forwarded content using the new template
      debugLog += `Sending forwarded content email with the same params\n`;
      
      const forwardResult = await emailjs.send(
        'service_dr8f4vk',             // Service ID
        'template_of0oytb',            // New Template ID for forwarding
        templateParams,                // Template parameters
        'vPrSFwIfO2--Bf-TN'           // Public Key
      );
      
      debugLog += `Forward EmailJS response: ${JSON.stringify(forwardResult, null, 2)}\n`;
      
      // Show success message and reset form
      setShowThankYouDialog(true);
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
    } catch (error) {
      // Improved error logging
      const errorDetails = JSON.stringify(error, Object.getOwnPropertyNames(error), 2);
      debugLog += `Error sending email: ${errorDetails}\n`;
      console.error("Error sending email:", error);
      
      // Check if the error has a message property and display it
      let errorMessage = "Failed to send your message. Please try again later.";
      if (error instanceof Error) {
        errorMessage += ` Error: ${error.message}`;
        
        // Add specific checks for common EmailJS errors
        if (error.message.includes("recipients address is empty")) {
          debugLog += `SOLUTION: Configure your EmailJS template to have a default value for both "From email" and "To email" fields.\n`;
          debugLog += `Log into EmailJS, go to Email Templates, select template_1u4cu5f and template_of0oytb, and add these values.\n`;
        }
      } else if (typeof error === 'object' && error !== null) {
        // Try to extract useful information from the error object
        const errorObj = error as any;
        if (errorObj.text) errorMessage += ` Details: ${errorObj.text}`;
        if (errorObj.status) errorMessage += ` (Status: ${errorObj.status})`;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
      
      // Show debug dialog when there's an error
      setShowDebugDialog(true);
    } finally {
      setIsSubmitting(false);
      setDebugInfo(debugLog);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80"
            alt="Colorful code on screen"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Have questions about our program? We're here to help!
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <ContactForm 
          formValues={formValues}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          zapierEnabled={true} // Keep this for compatibility with the component props
        />
      </section>

      <ThankYouDialog 
        showThankYouDialog={showThankYouDialog}
        setShowThankYouDialog={setShowThankYouDialog}
      />

      <DebugDialog 
        showDebugDialog={showDebugDialog}
        setShowDebugDialog={setShowDebugDialog}
        debugInfo={debugInfo}
      />
    </div>
  );
};

export default Contact;