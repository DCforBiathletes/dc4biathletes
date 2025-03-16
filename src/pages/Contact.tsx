import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYouDialog, setShowThankYouDialog] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [emailjsConfig] = useState({
    serviceId: 'service_dr8f4vk',
    templateId: 'template_1u4cu5f',
    isConfigured: true
  });
  const [showEmailInfo, setShowEmailInfo] = useState(false);
  const [showZapierConfig, setShowZapierConfig] = useState(false);
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState('');
  const [zapierEnabled, setZapierEnabled] = useState(false);
  
  // Hard-code the recipient email directly
  const RECIPIENT_EMAIL = "dc4biathletes@gmail.com";

  useEffect(() => {
    emailjs.init("vPrSFwIfO2--Bf-TN");
    console.log("EmailJS initialized with public key");

    // Check if zapier webhook URL exists in localStorage
    const savedWebhookUrl = localStorage.getItem('zapierWebhookUrl');
    if (savedWebhookUrl) {
      setZapierWebhookUrl(savedWebhookUrl);
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

  const triggerZapierWebhook = async (formData: typeof formValues) => {
    if (!zapierWebhookUrl) return false;
    
    try {
      console.log("Sending data to Zapier webhook");
      const response = await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS issues
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
        }),
      });
      
      console.log("Data sent to Zapier webhook");
      return true;
    } catch (error) {
      console.error("Error sending data to Zapier:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { name, email, subject, message } = formValues;
      
      // Explicitly include to_email as a direct string in templateParams
      const templateParams = {
        from_name: name,
        from_email: email,
        reply_to: email,
        subject: subject,
        message: message,
        to_name: "DC4Biathletes Team",
        to_email: RECIPIENT_EMAIL
      };
      
      console.log("Sending email with params:", templateParams);
      console.log("Using config:", {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId
      });
      
      // Using explicit string values for service/template IDs to ensure no undefined values
      const response = await emailjs.send(
        'service_dr8f4vk',
        'template_1u4cu5f',
        templateParams
      );
      
      console.log("EmailJS response:", response);
      console.log(`Email sent to recipient:
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
        To: ${RECIPIENT_EMAIL}
      `);
      
      // If Zapier is enabled, also send the data to Zapier
      if (zapierEnabled) {
        const zapierSuccess = await triggerZapierWebhook(formValues);
        if (zapierSuccess) {
          console.log("Successfully sent data to Zapier webhook");
        } else {
          console.warn("Failed to send data to Zapier webhook");
        }
      }
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      setShowThankYouDialog(true);
      
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
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
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white to-primary/5 border border-primary/20 rounded-2xl shadow-lg p-8">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-primary">Send us a Message</h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowZapierConfig(true)}
                className="text-xs"
              >
                Configure Zapier
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary/90">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/80 border-primary/20 focus:border-accent"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary/90">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-white/80 border-primary/20 focus:border-accent"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-primary/90">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Message subject"
                  required
                  className="bg-white/80 border-primary/20 focus:border-accent"
                  value={formValues.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary/90">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px] bg-white/80 border-primary/20 focus:border-accent focus-visible:ring-accent/50"
                  value={formValues.message}
                  onChange={handleInputChange}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              {zapierEnabled && (
                <div className="mt-2 text-xs text-center text-primary/70">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Zapier integration active
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Dialog open={showThankYouDialog} onOpenChange={setShowThankYouDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center">
              Your message has been sent successfully. We appreciate your interest in DC4Biathletes and will respond to your inquiry as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center my-4">
            <div className="bg-green-100 rounded-full p-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>
          <DialogFooter className="sm:justify-center">
            <Button 
              onClick={() => setShowThankYouDialog(false)}
              className="bg-accent hover:bg-accent/90"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showEmailInfo} onOpenChange={setShowEmailInfo}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>How Email Sending Works</DialogTitle>
            <DialogDescription>
              This contact form uses EmailJS to send messages. The sender email is configured in your EmailJS account, not directly in this form.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p>When a visitor completes this form:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Their message is sent via your EmailJS account</li>
              <li>The email appears to come from the email address you configured in your EmailJS service</li>
              <li>The visitor's email address is included as the reply-to address</li>
            </ol>
            <p className="font-medium mt-4">To set up EmailJS:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create an account at <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">EmailJS.com</a></li>
              <li>Add an email service (Gmail, Outlook, etc.) in your EmailJS dashboard</li>
              <li>Create an email template with variables: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">{"{{from_name}}"}</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">{"{{reply_to}}"}</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">{"{{subject}}"}</code>, and <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">{"{{message}}"}</code></li>
            </ol>
          </div>
          <DialogFooter className="mt-4">
            <Button onClick={() => setShowEmailInfo(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showZapierConfig} onOpenChange={setShowZapierConfig}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Configure Zapier Integration</DialogTitle>
            <DialogDescription>
              Enter your Zapier webhook URL to send form submissions to Google Sheets or other apps.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="webhookUrl">Zapier Webhook URL</Label>
              <Input
                id="webhookUrl"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={zapierWebhookUrl}
                onChange={(e) => setZapierWebhookUrl(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Create a Zap in Zapier with the "Webhooks by Zapier" trigger, then paste the webhook URL here.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">How to Set Up:</h4>
              <ol className="text-sm space-y-1 list-decimal pl-4">
                <li>Create a new Zap in Zapier</li>
                <li>Select "Webhooks by Zapier" as your trigger</li>
                <li>Choose "Catch Hook" as the event</li>
                <li>Copy the webhook URL provided by Zapier</li>
                <li>Paste it in the field above</li>
                <li>Continue setting up your Zap to connect to Google Sheets</li>
              </ol>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowZapierConfig(false)}>
              Cancel
            </Button>
            <Button onClick={saveZapierWebhook}>
              Save Webhook
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
