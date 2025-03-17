
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
              <p className="mb-2">When setting up your Zap to connect to Google Sheets:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Use "Webhooks by Zapier" as your trigger</li>
                <li>Select "Catch Hook" as the event</li>
                <li>For the action, choose "Google Sheets"</li>
                <li>Select "Create Spreadsheet Row" as the action event</li>
                <li>Configure columns to match these field names:</li>
              </ol>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong>name</strong> - Submitter's name</li>
                <li><strong>email</strong> - Submitter's email</li>
                <li><strong>subject</strong> - Message subject</li>
                <li><strong>message</strong> - The message content</li>
                <li><strong>timestamp</strong> - Submission time</li>
                <li><strong>source</strong> - Source of submission</li>
                <li><strong>pageTitle</strong> - Title of the submission</li>
                <li><strong>pageURL</strong> - URL where the form was submitted</li>
              </ul>
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Common Google Sheets Issues:</h4>
            <ul className="text-sm space-y-1 list-disc pl-4">
              <li>Make sure column names in your sheet exactly match the field names listed above</li>
              <li>In Zapier, map each webhook field to the corresponding Google Sheets column</li>
              <li>For timestamp fields, you may need to format the date in Zapier</li>
              <li>If data is missing, check that all fields are properly mapped in your Zap</li>
            </ul>
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
