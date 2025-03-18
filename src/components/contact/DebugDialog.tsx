
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
                <li>Verify your EmailJS service ID (service_dr8f4vk) and template ID (template_1u4cu5f) are correct</li>
                <li>Confirm your EmailJS public key (vPrSFwIfO2--Bf-TN) is valid</li>
                <li>Make sure the EmailJS service is active in your EmailJS dashboard</li>
                <li>Check template variables match what your template expects (from_name, from_email, subject, message)</li>
                <li>For "Account not found" errors, verify your EmailJS account is active and the public key is correct</li>
                <li>Try testing the service directly from the EmailJS dashboard</li>
                <li>Check if your EmailJS account requires additional validation</li>
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
