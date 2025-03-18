
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
            <AlertTitle className="text-amber-800">Troubleshooting EmailJS Configuration</AlertTitle>
            <AlertDescription className="text-amber-700">
              <p className="font-semibold mb-2">To fix "The recipients address is empty" error:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Required EmailJS Template Configuration:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Log into your EmailJS dashboard at emailjs.com</li>
                    <li>Go to Email Templates → Select template_1u4cu5f</li>
                    <li>Make sure BOTH "From email" and "To email" fields are properly configured</li>
                    <li>For "From email", either set a default value OR ensure it uses a parameter (e.g., {{from_email}})</li>
                    <li>For "To email", you MUST set a default recipient email or use a parameter name</li>
                    <li>Save the template after making changes</li>
                  </ul>
                </li>
                <li><strong>Important Parameter Names in Code:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Sender parameters: from_name, from_email, name, email</li>
                    <li>Recipient parameters: to_email, recipient, email_to</li>
                    <li>Message parameters: subject, message</li>
                    <li>These must match what your template expects exactly</li>
                  </ul>
                </li>
                <li><strong>Check Template Variables:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>In your template, look for variables like {{from_email}}, {{to_email}}</li>
                    <li>Ensure these EXACTLY match the parameter names in your code</li>
                    <li>Case sensitivity matters! "From_Email" is different from "from_email"</li>
                  </ul>
                </li>
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
