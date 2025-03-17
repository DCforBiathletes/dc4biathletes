
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

interface ZapierConfigProps {
  showZapierConfig: boolean;
  setShowZapierConfig: (show: boolean) => void;
  zapierWebhookUrl: string;
  setZapierWebhookUrl: (url: string) => void;
  saveZapierWebhook: () => void;
}

export const ZapierConfig = ({
  showZapierConfig,
  setShowZapierConfig,
  zapierWebhookUrl,
  setZapierWebhookUrl,
  saveZapierWebhook,
}: ZapierConfigProps) => {
  return (
    <Dialog open={showZapierConfig} onOpenChange={setShowZapierConfig}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Configure Zapier Integration</DialogTitle>
          <DialogDescription>
            Enter your Zapier webhook URL to send form submissions to Google Sheets or other apps.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="webhookUrl">Zapier Webhook URL</Label>
            <Input
              id="webhookUrl"
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              value={zapierWebhookUrl}
              onChange={(e) => setZapierWebhookUrl(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Create a Zap in Zapier with the "Webhooks by Zapier" trigger, then paste the webhook URL here.
            </p>
          </div>
          
          <Alert className="bg-blue-50 border-blue-200">
            <AlertTitle className="text-blue-800">Google Sheets Integration</AlertTitle>
            <AlertDescription className="text-blue-700">
              <p className="mb-2">The form now sends data compatible with your Google Sheets script. Make sure your script expects the following fields:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>pageTitle - Title of the submission</li>
                <li>pageURL - URL where the form was submitted</li>
                <li>name - Submitter's name</li>
                <li>email - Submitter's email</li>
                <li>subject - Message subject</li>
                <li>message - The message content</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">How to Set Up:</h4>
            <ol className="text-sm space-y-1 list-decimal pl-4">
              <li>Create a new Zap in Zapier</li>
              <li>Select "Webhooks by Zapier" as your trigger</li>
              <li>Choose "Catch Hook" as the event</li>
              <li>Copy the webhook URL provided by Zapier</li>
              <li>Paste it in the field above</li>
              <li>Continue setting up your Zap to connect to Google Sheets</li>
            </ol>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowZapierConfig(false)}>
            Cancel
          </Button>
          <Button onClick={saveZapierWebhook}>
            Save Webhook
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
