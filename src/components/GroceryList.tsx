
import { useState } from 'react';
import { 
  CalendarClock, 
  ShoppingBag, 
  Check, 
  Clock, 
  AlertTriangle, 
  Trash, 
  Edit 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GroceryItem } from '@/types';
import { useToast } from '@/components/ui/use-toast';

interface GroceryListProps {
  groceries: GroceryItem[];
  onDelete: (id: string) => void;
  onEdit: (grocery: GroceryItem) => void;
}

const GroceryList = ({ groceries, onDelete, onEdit }: GroceryListProps) => {
  const { toast } = useToast();
  
  const calculateDaysLeft = (expiryDate: Date): number => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = Math.abs(expiry.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return expiry > today ? diffDays : -diffDays;
  };

  const getExpiryStatusColor = (daysLeft: number): string => {
    if (daysLeft < 0) return 'text-red-500';
    if (daysLeft <= 2) return 'text-orange-500';
    if (daysLeft <= 5) return 'text-yellow-500';
    return 'text-zw-green-500';
  };

  const getExpiryLabel = (daysLeft: number): React.ReactNode => {
    if (daysLeft < 0) {
      return (
        <div className="flex items-center text-red-500 text-sm">
          <AlertTriangle className="h-4 w-4 mr-1" />
          <span>Expired {Math.abs(daysLeft)} day{Math.abs(daysLeft) !== 1 ? 's' : ''} ago</span>
        </div>
      );
    }
    
    if (daysLeft === 0) {
      return (
        <div className="flex items-center text-orange-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>Expires today</span>
        </div>
      );
    }
    
    if (daysLeft <= 2) {
      return (
        <div className="flex items-center text-orange-500 text-sm">
          <AlertTriangle className="h-4 w-4 mr-1" />
          <span>Expires in {daysLeft} day{daysLeft !== 1 ? 's' : ''}</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center text-zw-green-500 text-sm">
        <Check className="h-4 w-4 mr-1" />
        <span>{daysLeft} day{daysLeft !== 1 ? 's' : ''} left</span>
      </div>
    );
  };

  const handleSetReminder = (grocery: GroceryItem) => {
    toast({
      title: "Reminder set",
      description: `You'll receive a reminder before ${grocery.name} expires.`,
    });
  };
  
  // Group groceries by expiration status
  const sortedGroceries = [...groceries].sort((a, b) => {
    const daysLeftA = calculateDaysLeft(a.expiryDate);
    const daysLeftB = calculateDaysLeft(b.expiryDate);
    return daysLeftA - daysLeftB;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium flex items-center">
          <ShoppingBag className="h-5 w-5 mr-2 text-zw-green-500" />
          Your Groceries
        </h2>
        <div className="text-sm text-zw-slate-500">
          {groceries.length} item{groceries.length !== 1 ? 's' : ''}
        </div>
      </div>

      {groceries.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-8 text-center">
          <ShoppingBag className="h-12 w-12 text-zw-slate-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">No groceries yet</h3>
          <p className="text-zw-slate-500 mb-4">
            Add groceries to start tracking their expiry dates
          </p>
          <Button className="bg-zw-green-500 hover:bg-zw-green-600">
            Add your first grocery
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sortedGroceries.map((grocery) => {
            const daysLeft = calculateDaysLeft(grocery.expiryDate);
            const statusColor = getExpiryStatusColor(daysLeft);
            
            return (
              <Card 
                key={grocery.id}
                className="p-4 transition-all duration-300 hover:shadow-soft relative overflow-hidden group"
              >
                {/* Color indicator strip */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    daysLeft < 0 ? 'bg-red-500' : 
                    daysLeft <= 2 ? 'bg-orange-500' : 
                    daysLeft <= 5 ? 'bg-yellow-500' : 
                    'bg-zw-green-500'
                  }`}
                />
                
                <div className="pl-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{grocery.name}</h3>
                      <div className="flex items-center text-sm text-zw-slate-500 mt-1">
                        <CalendarClock className="h-4 w-4 mr-1" />
                        <span>Expires: {new Date(grocery.expiryDate).toLocaleDateString()}</span>
                      </div>
                      <div className="mt-1">
                        {getExpiryLabel(daysLeft)}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0" 
                        onClick={() => onEdit(grocery)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50" 
                        onClick={() => onDelete(grocery.id)}
                      >
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                  
                  {grocery.notes && (
                    <p className="text-sm text-zw-slate-500 mt-2">{grocery.notes}</p>
                  )}
                  
                  <div className="mt-3 pt-3 border-t border-zw-slate-100 flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm">Quantity: {grocery.quantity}</span>
                      {grocery.category && (
                        <span className="ml-3 text-sm px-2 py-0.5 bg-zw-slate-100 rounded-full text-zw-slate-700">
                          {grocery.category}
                        </span>
                      )}
                    </div>
                    
                    {!grocery.reminderSet && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-xs h-8"
                        onClick={() => handleSetReminder(grocery)}
                      >
                        Set Reminder
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GroceryList;
