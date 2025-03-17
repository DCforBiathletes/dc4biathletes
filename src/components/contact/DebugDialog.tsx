
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
          <DialogTitle>Zapier Debug Information</DialogTitle>
          <DialogDescription>
            This information can help troubleshoot issues with the Zapier integration.
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
                <li>Verify your Zapier webhook URL is correct</li>
                <li>Check if your Zap is turned on in Zapier</li>
                <li>Make sure your sample data format matches what Google Sheets expects</li>
                <li>Check the Zapier History to see if it received the webhook call</li>
                <li>Try redeploying your Zap with a new test trigger</li>
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
