
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
}

export const ContactForm = ({
  formValues,
  handleInputChange,
  handleSubmit,
  isSubmitting,
  zapierEnabled,
}: ContactFormProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-white to-primary/5 border border-primary/20 rounded-2xl shadow-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary">Send us a Message</h2>
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? 
              <>Sending... <Send className="ml-2 w-4 h-4 animate-pulse" /></> : 
              <>Send Message <Send className="ml-2 w-4 h-4" /></>
            } 
          </Button>
        </form>
      </div>
    </div>
  );
};
