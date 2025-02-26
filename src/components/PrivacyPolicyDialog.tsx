
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function PrivacyPolicyDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("privacyConsent");
    if (!hasConsented) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacyConsent", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Privacy Policy & Cookie Consent</DialogTitle>
          <DialogDescription>
            Please read our privacy policy and accept our terms to continue using our website.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto my-6 space-y-4">
          <h3 className="font-semibold text-lg">1. Information We Collect</h3>
          <p className="text-sm text-muted-foreground">
            We collect information that you provide directly to us, including when you register for an account,
            make a purchase, sign up for our newsletter, or communicate with us.
          </p>

          <h3 className="font-semibold text-lg">2. How We Use Your Information</h3>
          <p className="text-sm text-muted-foreground">
            We use the information we collect to provide, maintain, and improve our services,
            to communicate with you, and to personalize your experience.
          </p>

          <h3 className="font-semibold text-lg">3. Cookie Policy</h3>
          <p className="text-sm text-muted-foreground">
            We use cookies and similar technologies to enhance your experience on our website.
            These technologies help us understand how you use our services and improve them accordingly.
          </p>

          <h3 className="font-semibold text-lg">4. Data Protection</h3>
          <p className="text-sm text-muted-foreground">
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <h3 className="font-semibold text-lg">5. Your Rights</h3>
          <p className="text-sm text-muted-foreground">
            You have the right to access, correct, or delete your personal data. You can also object to
            processing and request data portability. Contact us to exercise these rights.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)} variant="outline">
            Decline
          </Button>
          <Button onClick={handleAccept}>Accept & Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
