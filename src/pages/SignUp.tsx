
import { useEffect } from 'react';
import AuthForm from '@/components/AuthForm';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const SignUp = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="fixed top-4 left-4">
        <Link to="/" className="flex items-center space-x-2 text-zw-green-500 transition-all duration-300 hover:text-zw-green-600">
          <Leaf className="h-6 w-6" strokeWidth={1.5} />
          <span className="font-medium">Zero Waste Grocery</span>
        </Link>
      </div>
      <AuthForm type="signup" />
    </div>
  );
};

export default SignUp;
