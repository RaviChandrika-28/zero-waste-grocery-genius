
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, PlusCircle } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GroceryItem } from '@/types';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

interface AddGroceryFormProps {
  onAddGrocery: (grocery: Omit<GroceryItem, 'id'>) => void;
  editingGrocery?: GroceryItem;
  onCancelEdit?: () => void;
}

const categories = [
  'Fruits',
  'Vegetables',
  'Dairy',
  'Meat',
  'Seafood',
  'Bakery',
  'Canned Goods',
  'Frozen Foods',
  'Pantry Items',
  'Other'
];

const AddGroceryForm = ({ onAddGrocery, editingGrocery, onCancelEdit }: AddGroceryFormProps) => {
  const { toast } = useToast();
  const [name, setName] = useState(editingGrocery?.name || '');
  const [expiryDate, setExpiryDate] = useState<Date | undefined>(
    editingGrocery?.expiryDate ? new Date(editingGrocery.expiryDate) : undefined
  );
  const [quantity, setQuantity] = useState<number>(editingGrocery?.quantity || 1);
  const [category, setCategory] = useState<string | undefined>(editingGrocery?.category);
  const [notes, setNotes] = useState(editingGrocery?.notes || '');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter a grocery name",
        variant: "destructive",
      });
      return;
    }
    
    if (!expiryDate) {
      toast({
        title: "Error",
        description: "Please select an expiry date",
        variant: "destructive",
      });
      return;
    }
    
    onAddGrocery({
      name,
      expiryDate,
      quantity,
      category,
      notes: notes.trim() || undefined,
      reminderSet: editingGrocery?.reminderSet || false
    });
    
    // Reset form if not editing
    if (!editingGrocery) {
      setName('');
      setExpiryDate(undefined);
      setQuantity(1);
      setCategory(undefined);
      setNotes('');
    }
    
    toast({
      title: editingGrocery ? "Grocery updated" : "Grocery added",
      description: editingGrocery 
        ? `${name} has been updated successfully.`
        : `${name} has been added to your list.`,
    });
    
    if (editingGrocery && onCancelEdit) {
      onCancelEdit();
    }
  };

  return (
    <Card className="p-6 shadow-soft">
      <h2 className="text-xl font-medium mb-4 flex items-center">
        <PlusCircle className="h-5 w-5 mr-2 text-zw-green-500" />
        {editingGrocery ? 'Edit Grocery' : 'Add Grocery'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Grocery Name*</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Milk, Apples, Bread"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date*</Label>
            <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !expiryDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {expiryDate ? format(expiryDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={expiryDate}
                  onSelect={(date) => {
                    setExpiryDate(date);
                    setIsDatePickerOpen(false);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="notes">Notes (Optional)</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add any additional details here..."
            className="resize-none"
            rows={3}
          />
        </div>
        
        <div className="flex justify-end space-x-4 pt-2">
          {editingGrocery && onCancelEdit && (
            <Button type="button" variant="outline" onClick={onCancelEdit}>
              Cancel
            </Button>
          )}
          <Button type="submit" className="bg-zw-green-500 hover:bg-zw-green-600">
            {editingGrocery ? 'Update Grocery' : 'Add Grocery'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default AddGroceryForm;
