import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ContactForm } from "@/components/contact/ContactForm";
import { ZapierConfig } from "@/components/contact/ZapierConfig";
import { ThankYouDialog } from "@/components/contact/ThankYouDialog";
import { DebugDialog } from "@/components/contact/DebugDialog";
import { triggerZapierWebhook, FormValues } from "@/components/contact/ZapierService";

const GOOGLE_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbwN625SeGbH1el28WwKLhzcL8BB2WFcAZKE8mSIVCPbgwodsfXJFqule6_IYc6HbMR3wQ/exec";

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
  const [webhookUrl, setWebhookUrl] = useState(GOOGLE_WEBHOOK_URL);
  const [webhookEnabled, setWebhookEnabled] = useState(true); // Always enabled with our direct webhook
  const [debugInfo, setDebugInfo] = useState<string>("");
  const [showDebugDialog, setShowDebugDialog] = useState(false);

  useEffect(() => {
    const savedWebhookUrl = localStorage.getItem('webhookUrl');
    if (savedWebhookUrl) {
      setWebhookUrl(savedWebhookUrl);
    } else {
      localStorage.setItem('webhookUrl', GOOGLE_WEBHOOK_URL);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveWebhookConfig = () => {
    if (webhookUrl) {
      localStorage.setItem('webhookUrl', webhookUrl);
      setWebhookEnabled(true);
      setShowZapierConfig(false);
      toast({
        title: "Webhook Saved",
        description: "Your form submissions will now be sent to the configured webhook.",
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
    debugLog += `Using webhook URL: ${webhookUrl}\n`;
    
    try {
      const { success, debugLog: submitDebugLog } = await triggerZapierWebhook(webhookUrl, formValues);
      debugLog += submitDebugLog;
      
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
      debugLog += `Error submitting form: ${error}\n`;
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
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
          zapierEnabled={webhookEnabled}
        />
      </section>

      <ThankYouDialog 
        showThankYouDialog={showThankYouDialog}
        setShowThankYouDialog={setShowThankYouDialog}
      />

      <ZapierConfig 
        showZapierConfig={showZapierConfig}
        setShowZapierConfig={setShowZapierConfig}
        zapierWebhookUrl={webhookUrl}
        setZapierWebhookUrl={setWebhookUrl}
        saveZapierWebhook={saveWebhookConfig}
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
