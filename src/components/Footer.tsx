
import { Link } from 'react-router-dom';
import { Leaf, Twitter, Instagram, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-zw-slate-200 dark:border-zw-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-zw-green-500">
              <Leaf className="h-6 w-6" />
              <span className="font-medium text-lg">Zero Waste Grocery</span>
            </Link>
            <p className="mt-4 text-sm text-zw-slate-600 dark:text-zw-slate-400">
              Helping you reduce food waste through smart grocery management. Join us in making a positive impact on the planet.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-zw-slate-500 hover:text-zw-green-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zw-slate-500 hover:text-zw-green-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-zw-slate-500 hover:text-zw-green-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-zw-slate-500 hover:text-zw-green-500 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium text-zw-slate-900 dark:text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="#about" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zw-slate-900 dark:text-white">Features</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Grocery Tracking
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Receipt Scanner
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Smart Reminders
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Recipe Suggestions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-zw-slate-900 dark:text-white">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-sm text-zw-slate-600 dark:text-zw-slate-400 hover:text-zw-green-500 transition-colors">
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zw-slate-200 dark:border-zw-slate-800">
          <p className="text-center text-sm text-zw-slate-500">
            &copy; {new Date().getFullYear()} Zero Waste Grocery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
