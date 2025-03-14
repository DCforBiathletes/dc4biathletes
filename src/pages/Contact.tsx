
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // In a real implementation, this would send the email
    // This is a simulation of sending an email
    console.log(`Sending email to jouni@revise-hub.com with:
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
      // Reset form
      e.currentTarget.reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#0698d6]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Have questions about our program? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-white to-primary/5 border border-primary/20 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary/90">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/80 border-primary/20 focus:border-accent"
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
