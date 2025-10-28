import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome back to FitMaker!",
      });
      navigate('/');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try Modi / rahulgandhi",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Fit<span className="text-primary">Maker</span>
            </h1>
            <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
            <p className="text-muted-foreground">Login to continue your fitness journey</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-background/50 border-primary/30"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-background/50 border-primary/30"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
              Login
            </Button>
          </form>

          <p className="text-center mt-6 text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary hover:underline font-semibold">
              Sign Up
            </Link>
          </p>

          <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
            <p className="text-xs text-center text-muted-foreground">
              <strong>Test Credentials:</strong><br />
              Username: Modi<br />
              Password: rahulgandhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
