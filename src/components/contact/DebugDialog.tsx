
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
            <AlertTitle className="text-amber-800">Troubleshooting EmailJS Recipient Error</AlertTitle>
            <AlertDescription className="text-amber-700">
              <p className="font-semibold mb-2">To fix "The recipients address is empty" error:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li><strong>Required EmailJS Template Configuration:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Log into your EmailJS dashboard at emailjs.com</li>
                    <li>Go to Email Templates → Select template_1u4cu5f</li>
                    <li>Under "To email" field, enter a default recipient email</li>
                    <li>Save the template</li>
                  </ul>
                </li>
                <li><strong>Alternative: Required Parameters in Code:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Your template might expect specific parameter names:</li>
                    <li><code>to_email</code></li>
                    <li><code>recipient</code></li>
                    <li><code>email_to</code></li>
                    <li>One of these should match what your template expects</li>
                  </ul>
                </li>
                <li><strong>Tips for Your Specific Template:</strong>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Check your EmailJS template "To email" field name</li>
                    <li>Use the exact same parameter name in your code</li>
                    <li>Make sure any email address is properly formatted</li>
                  </ul>
                </li>
                <li>If still having issues, create a new template in EmailJS and test with basic settings first</li>
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
