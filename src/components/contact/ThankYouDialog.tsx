
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ThankYouDialogProps {
  showThankYouDialog: boolean;
  setShowThankYouDialog: (show: boolean) => void;
}

export const ThankYouDialog = ({
  showThankYouDialog,
  setShowThankYouDialog,
}: ThankYouDialogProps) => {
  return (
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
  );
};
