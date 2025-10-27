import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to FitMaker!",
      description: "We'll get back to you soon with your personalized plan.",
    });
    setFormData({ name: "", email: "" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-primary">Fitness Community</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sign Up Now To Unlock Exclusive Access To Personalized Workout Plans, Expert Coaching, And A Supportive Community That Will Help You Achieve Your Fitness Goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="text-primary font-bold mb-2">Personalized Workout Plans</h3>
                <p className="text-sm text-muted-foreground">
                  Customized routines that match your fitness level and goals, ensuring you achieve the best results in the least amount of time.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="text-primary font-bold mb-2">Expert Coaching</h3>
                <p className="text-sm text-muted-foreground">
                  Work with certified trainers who will guide you every step of the way to adapt your plan to the right goals.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="text-primary font-bold mb-2">Community Support</h3>
                <p className="text-sm text-muted-foreground">
                  Join a vibrant community of fitness enthusiasts where you can share experiences, get motivated, and find support.
                </p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h3 className="text-primary font-bold mb-2">Exclusive Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Access premium content including video tutorials, nutrition guides, and member-only discounts on fitness gear.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary/10 backdrop-blur-md p-8 rounded-2xl border border-primary/20"
          >
            <div className="flex justify-center mb-6">
              <Button variant="destructive" className="mr-2">
                Sign Up
              </Button>
              <Button variant="outline">Login</Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/50 border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <Input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/50 border-border"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Sign Up
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <Button type="button" variant="outline" className="w-full" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign With Google
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
