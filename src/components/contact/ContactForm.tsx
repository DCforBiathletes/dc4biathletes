
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ContactFormProps {
  formValues: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  zapierEnabled: boolean;
  setShowZapierConfig: (show: boolean) => void;
  setShowDebugDialog: (show: boolean) => void;
}

export const ContactForm = ({
  formValues,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  zapierEnabled,
  setShowZapierConfig,
  setShowDebugDialog,
}: ContactFormProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-white to-primary/5 border border-primary/20 rounded-2xl shadow-lg p-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Send us a Message</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowZapierConfig(true)}
              className="text-xs"
            >
              Configure Zapier
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowDebugDialog(true)}
              className="text-xs"
            >
              Debug Info
            </Button>
          </div>
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
  );
};
