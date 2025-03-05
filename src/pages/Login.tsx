
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Leaf, Mail, Phone, Key, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form state for email login
  const [emailLogin, setEmailLogin] = useState({
    email: '',
    password: ''
  });
  
  // Form state for phone login
  const [phoneLogin, setPhoneLogin] = useState({
    phone: '',
    password: ''
  });

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login successful",
        description: "Welcome back to Zero Waste Grocery!",
      });
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      toast({
        title: "Login successful",
        description: "Welcome back to Zero Waste Grocery!",
      });
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 bg-white dark:bg-black">
      <div className="fixed top-4 left-4">
        <Link to="/" className="flex items-center space-x-2 text-zw-green-500 transition-all duration-300 hover:text-zw-green-600">
          <Leaf className="h-6 w-6" strokeWidth={1.5} />
          <span className="font-medium">Zero Waste Grocery</span>
        </Link>
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Leaf className="h-12 w-12 text-zw-green-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-medium tracking-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-zw-slate-600 dark:text-zw-slate-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-zw-green-500 hover:text-zw-green-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <Card className="shadow-soft border border-zw-slate-200 dark:border-zw-slate-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">Login</CardTitle>
            <CardDescription>
              Choose how you want to sign in
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="email" className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </TabsTrigger>
              <TabsTrigger value="phone" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Phone</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <CardContent>
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="you@example.com" 
                        className="pl-10"
                        value={emailLogin.email}
                        onChange={(e) => setEmailLogin({...emailLogin, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password-email">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-zw-green-500 hover:text-zw-green-600">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="password-email" 
                        type={showPassword ? "text" : "password"} 
                        className="pl-10 pr-10"
                        value={emailLogin.password}
                        onChange={(e) => setEmailLogin({...emailLogin, password: e.target.value})}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-2.5"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? 
                          <EyeOff className="h-5 w-5 text-muted-foreground" /> : 
                          <Eye className="h-5 w-5 text-muted-foreground" />
                        }
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-zw-green-500 hover:bg-zw-green-600"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : (
                      <>
                        Sign in with Email
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
            
            <TabsContent value="phone">
              <CardContent>
                <form onSubmit={handlePhoneLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="pl-10"
                        value={phoneLogin.phone}
                        onChange={(e) => setPhoneLogin({...phoneLogin, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password-phone">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-zw-green-500 hover:text-zw-green-600">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Key className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input 
                        id="password-phone" 
                        type={showPassword ? "text" : "password"} 
                        className="pl-10 pr-10"
                        value={phoneLogin.password}
                        onChange={(e) => setPhoneLogin({...phoneLogin, password: e.target.value})}
                        required
                      />
                      <button 
                        type="button"
                        className="absolute right-3 top-2.5"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? 
                          <EyeOff className="h-5 w-5 text-muted-foreground" /> : 
                          <Eye className="h-5 w-5 text-muted-foreground" />
                        }
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-zw-green-500 hover:bg-zw-green-600"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : (
                      <>
                        Sign in with Phone
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </TabsContent>
          </Tabs>
          
          <CardFooter className="flex flex-col space-y-4 mt-4 border-t pt-6">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zw-slate-300 dark:border-zw-slate-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                Google
              </Button>
              <Button variant="outline" className="w-full">
                Facebook
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
