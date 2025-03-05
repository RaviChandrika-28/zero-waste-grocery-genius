
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Bell, Mail, Phone } from 'lucide-react';

const ReminderForm = () => {
  const { toast } = useToast();
  const [reminderTime, setReminderTime] = useState('3');
  const [enableEmail, setEnableEmail] = useState(true);
  const [enableSMS, setEnableSMS] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reminder preferences saved",
        description: `You'll receive reminders ${reminderTime} days before your groceries expire.`,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="p-6 shadow-soft">
      <h2 className="text-xl font-medium mb-4 flex items-center">
        <Bell className="h-5 w-5 mr-2 text-zw-green-500" />
        Reminder Settings
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="reminderTime">Remind me before expiry</Label>
          <Select value={reminderTime} onValueChange={setReminderTime}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select days before expiry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 day before</SelectItem>
              <SelectItem value="2">2 days before</SelectItem>
              <SelectItem value="3">3 days before</SelectItem>
              <SelectItem value="5">5 days before</SelectItem>
              <SelectItem value="7">1 week before</SelectItem>
              <SelectItem value="14">2 weeks before</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-4">
          <Label>Notification methods</Label>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-zw-slate-500" />
              <span>Email notifications</span>
            </div>
            <Switch 
              checked={enableEmail} 
              onCheckedChange={setEnableEmail} 
              className="data-[state=checked]:bg-zw-green-500"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-zw-slate-500" />
              <span>SMS notifications</span>
            </div>
            <Switch 
              checked={enableSMS} 
              onCheckedChange={setEnableSMS} 
              className="data-[state=checked]:bg-zw-green-500"
            />
          </div>
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full bg-zw-green-500 hover:bg-zw-green-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : 'Save Reminder Preferences'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ReminderForm;
