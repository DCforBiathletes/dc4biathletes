
import { Button } from "@/components/ui/button";
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

interface DebugDialogProps {
  showDebugDialog: boolean;
  setShowDebugDialog: (show: boolean) => void;
  debugInfo: string;
}

export const DebugDialog = ({
  showDebugDialog,
  setShowDebugDialog,
  debugInfo,
}: DebugDialogProps) => {
  return (
    <Dialog open={showDebugDialog} onOpenChange={setShowDebugDialog}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>EmailJS Debug Information</DialogTitle>
          <DialogDescription>
            This information can help troubleshoot issues with the EmailJS integration.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-black/90 text-green-400 p-4 rounded font-mono text-xs overflow-auto max-h-[400px]">
            <pre>{debugInfo || "No debug information available yet. Submit the form to generate logs."}</pre>
          </div>
          
          <Alert className="bg-amber-50 border-amber-200">
            <AlertTitle className="text-amber-800">Troubleshooting Tips</AlertTitle>
            <AlertDescription className="text-amber-700">
              <ol className="list-decimal pl-5 space-y-1">
                <li>Verify your EmailJS service ID, template ID, and user ID are correct</li>
                <li>Make sure your EmailJS account is active and verified</li>
                <li>Check if your template variables match the parameters being sent</li>
                <li>Ensure your email service provider (Gmail, etc.) is properly connected</li>
                <li>For "Account not found" errors, verify you've initialized EmailJS with <code>emailjs.init()</code></li>
                <li>Make sure your template field names match the data you're sending (e.g., from_name, from_email, etc.)</li>
              </ol>
            </AlertDescription>
          </Alert>
        </div>
        
        <DialogFooter>
          <Button onClick={() => setShowDebugDialog(false)}>
            Close
          </Button>
          <Button variant="outline" onClick={() => navigator.clipboard.writeText(debugInfo)}>
            Copy Debug Info
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
