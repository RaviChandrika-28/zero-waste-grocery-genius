
import { useEffect } from 'react';
import { 
  ShoppingBag, 
  CalendarClock, 
  Scan, 
  Bell, 
  UtensilsCrossed, 
  Smartphone 
} from 'lucide-react';
import { setupScrollAnimations } from '@/utils/animations';

const features = [
  {
    icon: <ShoppingBag className="h-8 w-8 text-zw-green-500" />,
    title: 'Track Your Groceries',
    description: "Easily add groceries with their expiry dates to keep track of what's in your pantry and fridge."
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-zw-green-500" />,
    title: 'Expiry Date Management',
    description: 'Never let food go bad. Our system organizes groceries by expiry date to help you use items before they spoil.'
  },
  {
    icon: <Scan className="h-8 w-8 text-zw-green-500" />,
    title: 'Receipt Scanner',
    description: 'Add groceries quickly by scanning your receipts. Our system automatically extracts item details and expiry information.'
  },
  {
    icon: <Bell className="h-8 w-8 text-zw-green-500" />,
    title: 'Smart Reminders',
    description: 'Get customized reminders via email or phone before your groceries expire, so you can use them in time.'
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-zw-green-500" />,
    title: 'Recipe Suggestions',
    description: 'Receive AI-powered recipe suggestions based on groceries nearing expiration, helping you use ingredients creatively.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-zw-green-500" />,
    title: 'Mobile Notifications',
    description: "Stay informed with timely notifications on your phone, making it easy to manage groceries even when you're on the go."
  }
];

const Features = () => {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <section id="features" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 animate-on-scroll">
            Smart Features for 
            <span className="text-zw-green-500"> Conscious Living</span>
          </h2>
          <p className="text-zw-slate-600 dark:text-zw-slate-400 text-lg animate-on-scroll">
            Our thoughtfully designed tools help you manage groceries efficiently, 
            reduce food waste, and save money while protecting the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-zw-slate-900 rounded-xl p-6 shadow-soft border border-zw-slate-100 dark:border-zw-slate-800 flex flex-col transition-all duration-300 hover:shadow-elevation animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-zw-green-50 dark:bg-zw-green-900/20 rounded-lg self-start mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-zw-slate-600 dark:text-zw-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
