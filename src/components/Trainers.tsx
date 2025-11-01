import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import trainer1 from '@/assets/trainer-1.jpg';
import trainer2 from '@/assets/trainer-2.jpg';
import trainer3 from '@/assets/trainer-3.jpg';
import trainer4 from '@/assets/trainer-4.jpg';

const Trainers = () => {
  const trainers = [
    {
      name: 'Alex Thompson',
      role: 'Strength & Conditioning Coach',
      specialty: 'Powerlifting, Olympic Weightlifting',
      image: trainer1,
    },
    {
      name: 'Sarah Martinez',
      role: 'Yoga & Wellness Instructor',
      specialty: 'Vinyasa, Meditation, Mindfulness',
      image: trainer2,
    },
    {
      name: 'Michael Chen',
      role: 'HIIT & Cardio Specialist',
      specialty: 'High-Intensity Training, Endurance',
      image: trainer3,
    },
    {
      name: 'Emma Williams',
      role: 'Nutrition & Fitness Coach',
      specialty: 'Body Composition, Meal Planning',
      image: trainer4,
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Expert <span className="text-primary">Trainers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn from certified professionals dedicated to your fitness journey
          </p>
        </motion.div>

        <div className="flex justify-end gap-2 mb-8">
          <Button variant="outline" size="icon">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-primary text-sm font-semibold">{trainer.role}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">{trainer.specialty}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
