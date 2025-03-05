
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Scan, Upload, Image, Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ReceiptScanner = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanComplete, setScanComplete] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Start the scanning animation
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);
    
    // Simulate a scanning process with progress updates
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsScanning(false);
            setScanComplete(true);
            toast({
              title: "Receipt scanned successfully",
              description: "5 items were found and added to your grocery list.",
            });
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };
  
  return (
    <Card className="p-6 shadow-soft">
      <h2 className="text-xl font-medium mb-4 flex items-center">
        <Scan className="h-5 w-5 mr-2 text-zw-green-500" />
        Receipt Scanner
      </h2>
      
      <div className="space-y-6">
        <p className="text-zw-slate-600 dark:text-zw-slate-400">
          Quickly add groceries by scanning your receipt. Our system will automatically extract items and their details.
        </p>
        
        {scanComplete ? (
          <div className="bg-zw-green-50 border border-zw-green-200 rounded-lg p-4 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-zw-green-100 flex items-center justify-center mb-3">
              <Check className="h-6 w-6 text-zw-green-500" />
            </div>
            <h3 className="font-medium text-zw-green-800 mb-1">Scan Complete!</h3>
            <p className="text-sm text-zw-green-700">
              5 items have been added to your grocery list.
            </p>
            <Button 
              variant="outline" 
              className="mt-3 text-zw-green-500 border-zw-green-300 hover:bg-zw-green-50"
              onClick={() => setScanComplete(false)}
            >
              Scan Another Receipt
            </Button>
          </div>
        ) : (
          <div className="text-center">
            {isScanning ? (
              <div className="space-y-4">
                <div className="p-8 border-2 border-dashed border-zw-slate-200 rounded-lg bg-zw-slate-50 flex items-center justify-center">
                  <div className="animate-pulse">
                    <Scan className="h-16 w-16 text-zw-green-400" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-zw-slate-500">
                    <span>Scanning receipt...</span>
                    <span>{scanProgress}%</span>
                  </div>
                  <Progress value={scanProgress} className="h-2" />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-8 border-2 border-dashed border-zw-slate-200 rounded-lg bg-zw-slate-50 flex flex-col items-center justify-center">
                  <Image className="h-16 w-16 text-zw-slate-300 mb-2" strokeWidth={1.5} />
                  <p className="text-sm text-zw-slate-500">Upload a receipt image</p>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <label htmlFor="receipt-upload">
                    <div className="w-full">
                      <Button 
                        className="w-full bg-zw-green-500 hover:bg-zw-green-600"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Receipt
                      </Button>
                    </div>
                    <input 
                      id="receipt-upload" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleFileChange}
                    />
                  </label>
                  <Button 
                    variant="outline"
                    className="w-full"
                  >
                    <Scan className="h-4 w-4 mr-2" />
                    Take Photo
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="text-sm text-zw-slate-500">
          <p className="mb-1 font-medium">Supported formats:</p>
          <ul className="list-disc pl-5">
            <li>JPG, PNG, HEIF images</li>
            <li>Receipt size up to 10MB</li>
            <li>Clear, well-lit images work best</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ReceiptScanner;
