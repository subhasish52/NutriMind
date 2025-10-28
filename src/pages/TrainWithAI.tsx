import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const exercises = [
  { name: 'Push-Ups', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop' },
  { name: 'Squats', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop' },
  { name: 'Deadlifts', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
  { name: 'Bench Press', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&h=300&fit=crop' },
  { name: 'Lunges', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
  { name: 'Plank', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop' },
  { name: 'Pull-Ups', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400&h=300&fit=crop' },
  { name: 'Burpees', image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?w=400&h=300&fit=crop' },
];

const TrainWithAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Train With <span className="text-primary">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select an exercise to start your AI-guided training session with real-time form correction and personalized feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={exercise.image}
                      alt={exercise.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{exercise.name}</h3>
                    </div>
                  </div>
                  <div className="p-4 bg-primary/10">
                    <p className="text-sm text-center text-muted-foreground">
                      Click to start AI-guided session
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-card/50 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Coming Soon</h3>
              <p className="text-muted-foreground">
                AI-powered exercise tracking with real-time form analysis, rep counting, and personalized coaching feedback will be available soon. Get ready to transform your workout experience!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainWithAI;
