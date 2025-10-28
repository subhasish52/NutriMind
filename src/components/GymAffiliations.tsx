import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const gyms = [
  { name: 'CultFit', location: 'Mumbai', logo: '💪' },
  { name: "Gold's Gym", location: 'Delhi', logo: '🏋️' },
  { name: 'Anytime Fitness', location: 'Bangalore', logo: '⏰' },
  { name: 'Fitness First', location: 'Pune', logo: '🎯' },
  { name: 'Snap Fitness', location: 'Hyderabad', logo: '⚡' },
  { name: 'Talwalkars', location: 'Chennai', logo: '🔥' },
];

const GymAffiliations = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gyms <span className="text-primary">Affiliated With Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Train at any of our certified partner gyms across India
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...gyms, ...gyms].map((gym, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <Card className="w-64 bg-card/50 border-primary/20 hover:border-primary/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{gym.logo}</div>
                    <h3 className="text-xl font-bold mb-2">{gym.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{gym.location}</span>
                    </div>
                    <p className="text-sm text-primary mt-2">Certified Partner</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymAffiliations;
