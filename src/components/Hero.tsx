
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Leaf, Check, ArrowRight } from 'lucide-react';
import { setupScrollAnimations } from '@/utils/animations';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zw-green-50/50 to-transparent dark:from-zw-green-950/20 dark:to-transparent pointer-events-none" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-zw-green-100 text-zw-green-800 border border-zw-green-200 mb-4 animate-fade-in">
              <Leaf className="h-4 w-4 mr-1.5" />
              <span>Sustainable Living Made Simple</span>
            </div>
            
            <h1 className="font-medium tracking-tight text-balance animate-fade-in animation-delay-100">
              Reduce Food Waste, 
              <span className="text-zw-green-500"> Save Money</span> 
              <br className="hidden sm:inline" /> and Help the Planet
            </h1>
            
            <p className="text-lg text-zw-slate-600 dark:text-zw-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in animation-delay-200 text-balance">
              Zero Waste Grocery helps you track expiration dates, get reminded before food goes bad, and suggests recipes based on what you have. Join the movement to reduce food waste.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Link to="/signup">
                <Button className="min-w-[180px] bg-zw-green-500 hover:bg-zw-green-600 text-white">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="#features">
                <Button variant="outline" className="min-w-[180px]">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 animate-fade-in animation-delay-500">
              {[
                'Track expiry dates',
                'Get timely reminders',
                'Smart recipe suggestions'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 rounded-full p-1.5 bg-zw-green-100 text-zw-green-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="ml-2 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero image */}
          <div className="lg:col-span-6 animate-fade-in animation-delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-elevation bg-white">
              <div className="aspect-[4/3] bg-gradient-to-br from-zw-green-50 to-zw-green-100 flex items-center justify-center">
                {/* Placeholder for an actual image */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-12 w-12 text-zw-green-500" />
                  </div>
                  <p className="text-zw-green-700 font-medium text-lg">
                    Track your groceries easily
                  </p>
                  <p className="text-zw-green-600 text-sm mt-2">
                    Scan receipts, add items, get reminders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
