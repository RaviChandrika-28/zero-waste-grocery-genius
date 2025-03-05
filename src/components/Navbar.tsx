
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if user is on home page
  const isHomePage = location.pathname === '/';

  // Update navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 lg:px-8',
        {
          'py-4 glass-effect shadow-soft': isScrolled || !isHomePage,
          'py-6': !isScrolled && isHomePage,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-zw-green-500 transition-all duration-300 hover:text-zw-green-600"
        >
          <Leaf className="h-8 w-8" strokeWidth={1.5} />
          <span className="font-medium text-xl">Zero Waste Grocery</span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-base transition-colors duration-200 hover:text-zw-green-500",
              { "text-zw-green-500 font-medium": location.pathname === "/" }
            )}
          >
            Home
          </Link>
          <Link 
            to="#features" 
            className="text-base transition-colors duration-200 hover:text-zw-green-500"
          >
            Features
          </Link>
          <Link 
            to="#about" 
            className="text-base transition-colors duration-200 hover:text-zw-green-500"
          >
            About
          </Link>
        </nav>

        {/* Action buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="font-normal">
              Log in
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-zw-green-500 hover:bg-zw-green-600 text-white font-normal">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 rounded-md focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={cn(
            "w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out",
            { "transform rotate-45 translate-y-2": isMobileMenuOpen }
          )} />
          <span className={cn(
            "w-6 h-0.5 bg-current transition-opacity duration-300 ease-in-out",
            { "opacity-0": isMobileMenuOpen }
          )} />
          <span className={cn(
            "w-6 h-0.5 bg-current transition-transform duration-300 ease-in-out",
            { "transform -rotate-45 -translate-y-2": isMobileMenuOpen }
          )} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out overflow-hidden glass-effect",
        { 
          "max-h-96 border-b border-white/10 shadow-soft": isMobileMenuOpen,
          "max-h-0": !isMobileMenuOpen
        }
      )}>
        <div className="px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className="py-2">
            Home
          </Link>
          <Link to="#features" className="py-2">
            Features
          </Link>
          <Link to="#about" className="py-2">
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Link to="/login" className="w-full">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button className="w-full bg-zw-green-500 hover:bg-zw-green-600">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
