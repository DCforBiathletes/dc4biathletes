
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#fdfcfb] via-[#e2d1c3] to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 drop-shadow-sm">
            Get in Touch
          </h1>
          <p className="text-xl text-primary/90 mb-8 drop-shadow-sm">
            Have questions about our program? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              
              <Card className="p-6 bg-gradient-to-br from-white via-white/95 to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-primary/80">info@dc4biathletes.eu</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-white via-white/95 to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-primary/80">+43 123 456 789</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-white via-white/95 to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary">Address</h3>
                    <p className="text-primary/80">
                      Alpine Sports Center<br />
                      Sportstraße 1<br />
                      6020 Innsbruck, Austria
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-primary/5 border border-primary/20 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary/90">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-white/80 border-primary/20 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary/90">Email</Label>
                  <Input
                    id="email"
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
                    placeholder="Message subject"
                    required
                    className="bg-white/80 border-primary/20 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary/90">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Your message"
                    required
                    className="w-full min-h-[150px] px-3 py-2 rounded-md border border-primary/20 bg-white/80 text-sm focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
