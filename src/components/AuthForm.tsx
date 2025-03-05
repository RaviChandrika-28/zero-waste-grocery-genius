
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { AuthCredentials, SignUpCredentials, User } from '@/types';
import { Leaf, Check } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const isLogin = type === 'login';
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // For login
  const [credentials, setCredentials] = useState<AuthCredentials>({
    email: '',
    password: ''
  });
  
  // For sign up
  const [signUpCredentials, setSignUpCredentials] = useState<SignUpCredentials>({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email: credentials.email,
        phoneNumber: ''
      };
      
      // Store user in localStorage (just for demo)
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      toast({
        title: "Login successful",
        description: "Welcome back to Zero Waste Grocery!",
      });
      
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sign up
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        name: signUpCredentials.name,
        email: signUpCredentials.email,
        phoneNumber: signUpCredentials.phoneNumber
      };
      
      // Store user in localStorage (just for demo)
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      toast({
        title: "Account created",
        description: "Welcome to Zero Waste Grocery!",
      });
      
      navigate('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Leaf className="h-12 w-12 text-zw-green-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-medium tracking-tight">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h2>
        <p className="mt-2 text-center text-sm text-zw-slate-600 dark:text-zw-slate-400">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <Button variant="link" className="p-0 h-auto text-zw-green-500" onClick={() => navigate('/signup')}>
                Sign up
              </Button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Button variant="link" className="p-0 h-auto text-zw-green-500" onClick={() => navigate('/login')}>
                Sign in
              </Button>
            </>
          )}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="px-4 py-8 shadow-soft sm:rounded-lg sm:px-10 border border-zw-slate-200 dark:border-zw-slate-800">
          <form onSubmit={isLogin ? handleLoginSubmit : handleSignUpSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <Label htmlFor="name" className="block text-sm font-medium">
                  Name
                </Label>
                <div className="mt-1">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={signUpCredentials.name}
                    onChange={(e) => setSignUpCredentials({...signUpCredentials, name: e.target.value})}
                    className="block w-full"
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="email" className="block text-sm font-medium">
                Email address
              </Label>
              <div className="mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={isLogin ? credentials.email : signUpCredentials.email}
                  onChange={(e) => {
                    isLogin 
                      ? setCredentials({...credentials, email: e.target.value})
                      : setSignUpCredentials({...signUpCredentials, email: e.target.value});
                  }}
                  className="block w-full"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password" className="block text-sm font-medium">
                Password
              </Label>
              <div className="mt-1">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                  required
                  value={isLogin ? credentials.password : signUpCredentials.password}
                  onChange={(e) => {
                    isLogin 
                      ? setCredentials({...credentials, password: e.target.value})
                      : setSignUpCredentials({...signUpCredentials, password: e.target.value});
                  }}
                  className="block w-full"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <Label htmlFor="phoneNumber" className="block text-sm font-medium">
                  Phone Number (for reminders)
                </Label>
                <div className="mt-1">
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={signUpCredentials.phoneNumber}
                    onChange={(e) => setSignUpCredentials({...signUpCredentials, phoneNumber: e.target.value})}
                    className="block w-full"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-zw-slate-300 text-zw-green-600 focus:ring-zw-green-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-zw-slate-600 dark:text-zw-slate-400">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Button variant="link" className="p-0 h-auto text-zw-green-500">
                    Forgot your password?
                  </Button>
                </div>
              </div>
            )}

            <div>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center bg-zw-green-500 hover:bg-zw-green-600"
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>{isLogin ? 'Sign in' : 'Create account'}</>
                )}
              </Button>
            </div>
          </form>

          {!isLogin && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zw-slate-300 dark:border-zw-slate-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-zw-slate-900 text-zw-slate-500">
                    By signing up, you agree to our
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-center">
                <Button variant="link" className="p-0 h-auto text-zw-green-500">
                  Terms of Service
                </Button>
                <Button variant="link" className="p-0 h-auto text-zw-green-500">
                  Privacy Policy
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AuthForm;
