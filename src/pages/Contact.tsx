
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ContactForm } from "@/components/contact/ContactForm";
import { ZapierConfig } from "@/components/contact/ZapierConfig";
import { ThankYouDialog } from "@/components/contact/ThankYouDialog";
import { triggerZapierWebhook, FormValues } from "@/components/contact/ZapierService";

const DEFAULT_ZAPIER_WEBHOOK = "https://hooks.zapier.com/hooks/catch/9911481/2lfcqob/";

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
  const [showZapierConfig, setShowZapierConfig] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState(DEFAULT_ZAPIER_WEBHOOK);
  const [zapierEnabled, setZapierEnabled] = useState(true); // Pre-enabled since we have a default

  useEffect(() => {
    // Check if zapier webhook URL exists in localStorage
    const savedWebhookUrl = localStorage.getItem('zapierWebhookUrl');
    if (savedWebhookUrl) {
      setZapierWebhookUrl(savedWebhookUrl);
      setZapierEnabled(true);
    } else if (DEFAULT_ZAPIER_WEBHOOK) {
      // If no saved webhook but we have a default, save it
      localStorage.setItem('zapierWebhookUrl', DEFAULT_ZAPIER_WEBHOOK);
      setZapierEnabled(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveZapierWebhook = () => {
    if (zapierWebhookUrl) {
      localStorage.setItem('zapierWebhookUrl', zapierWebhookUrl);
      setZapierEnabled(true);
      setShowZapierConfig(false);
      toast({
        title: "Zapier Webhook Saved",
        description: "Your form submissions will now be sent to Zapier.",
      });
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid webhook URL",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send the form data to Zapier if enabled
      if (zapierEnabled) {
        const result = await triggerZapierWebhook(zapierWebhookUrl, formValues);
        
        if (result.success) {
          // Show success message and dialog
          setShowThankYouDialog(true);
          
          // Reset form
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
        } else {
          throw new Error("Failed to send form data");
        }
      } else {
        // If Zapier is not configured, configure it silently without showing UI
        localStorage.setItem('zapierWebhookUrl', DEFAULT_ZAPIER_WEBHOOK);
        setZapierEnabled(true);
        
        // Retry submission
        const result = await triggerZapierWebhook(DEFAULT_ZAPIER_WEBHOOK, formValues);
        
        if (result.success) {
          // Show success message
          setShowThankYouDialog(true);
          
          // Reset form
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
        } else {
          throw new Error("Failed to send form data");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
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
          zapierEnabled={zapierEnabled}
        />
      </section>

      <ThankYouDialog 
        showThankYouDialog={showThankYouDialog}
        setShowThankYouDialog={setShowThankYouDialog}
      />

      {showZapierConfig && (
        <ZapierConfig 
          showZapierConfig={showZapierConfig}
          setShowZapierConfig={setShowZapierConfig}
          zapierWebhookUrl={zapierWebhookUrl}
          setZapierWebhookUrl={setZapierWebhookUrl}
          saveZapierWebhook={saveZapierWebhook}
        />
      )}
    </div>
  );
};

export default Contact;
