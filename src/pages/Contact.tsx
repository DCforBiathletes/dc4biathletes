
import { useState } from "react";
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
      // Add timestamp and page URL to the template parameters
      const templateParams = {
        from_name: formValues.name,
        from_email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        timestamp: new Date().toISOString(),
        pageURL: window.location.href
      };
      
      debugLog += `Sending email with params: ${JSON.stringify(templateParams, null, 2)}\n`;
      
      // Initialize EmailJS with the CORRECT public key
      emailjs.init("vPrSFwIfO2--Bf-TN");
      debugLog += `EmailJS initialized with public key vPrSFwIfO2--Bf-TN\n`;
      
      // Send email with service ID and template ID (no user ID parameter)
      const result = await emailjs.send(
        'service_dr8f4vk',
        'template_1u4cu5f',
        templateParams
      );
      
      debugLog += `EmailJS response: ${JSON.stringify(result, null, 2)}\n`;
      
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
    } finally {
      setIsSubmitting(false);
      setDebugInfo(debugLog);
      
      // Always show debug info after each submission to help troubleshoot
      setShowDebugDialog(true);
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
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowDebugDialog(true)}
            className="text-sm text-white/70 hover:text-white transition-colors underline"
          >
            Debug Mode
          </button>
        </div>
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
