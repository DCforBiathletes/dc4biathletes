import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ContactForm } from "@/components/contact/ContactForm";
import { ZapierConfig } from "@/components/contact/ZapierConfig";
import { ThankYouDialog } from "@/components/contact/ThankYouDialog";
import { DebugDialog } from "@/components/contact/DebugDialog";
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
  const [debugInfo, setDebugInfo] = useState<string>("");
  const [showDebugDialog, setShowDebugDialog] = useState(false);

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
    let debugLog = `Form submission started\n`;
    debugLog += `Form values: ${JSON.stringify(formValues, null, 2)}\n`;
    
    try {
      // Send the form data to Zapier if enabled
      if (zapierEnabled) {
        debugLog += `Zapier enabled. Webhook URL: ${zapierWebhookUrl}\n`;
        const { success, debugLog: zapierDebugLog } = await triggerZapierWebhook(zapierWebhookUrl, formValues);
        debugLog += zapierDebugLog;
        
        // Show success message and dialog regardless of technical success
        // Due to CORS issues, we often can't verify actual success but the webhook may still go through
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
          description: "Your message has been submitted. It may take some time to process.",
        });
        
        // Show debug dialog automatically in case there were issues
        setDebugInfo(debugLog);
        if (!success) {
          setShowDebugDialog(true);
        }
      } else {
        debugLog += `Zapier not configured\n`;
        // If Zapier is not configured, inform the user
        toast({
          title: "Configuration Required",
          description: "Please configure the Zapier webhook to receive form submissions.",
          variant: "destructive"
        });
        setShowZapierConfig(true);
      }
    } catch (error) {
      debugLog += `Error submitting form: ${error}\n`;
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
      
      // Show debug dialog automatically on error
      setDebugInfo(debugLog);
      setShowDebugDialog(true);
    } finally {
      setDebugInfo(debugLog);
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
          setShowZapierConfig={setShowZapierConfig}
          setShowDebugDialog={setShowDebugDialog}
        />
      </section>

      <ThankYouDialog 
        showThankYouDialog={showThankYouDialog}
        setShowThankYouDialog={setShowThankYouDialog}
      />

      <ZapierConfig 
        showZapierConfig={showZapierConfig}
        setShowZapierConfig={setShowZapierConfig}
        zapierWebhookUrl={zapierWebhookUrl}
        setZapierWebhookUrl={setZapierWebhookUrl}
        saveZapierWebhook={saveZapierWebhook}
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
