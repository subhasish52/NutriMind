import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Arjun Sharma",
    role: "Personal Trainer",
    specialty: "Strength Training & Weight Loss",
    experience: "8 Years Experience",
    image: trainer1,
    email: "arjun.sharma@nutrimind.ai",
    phone: "+91 98765 43210",
  },
  {
    name: "Rohan Patel",
    role: "Personal Trainer",
    specialty: "CrossFit & Conditioning",
    experience: "6 Years Experience",
    image: trainer3,
    email: "rohan.patel@nutrimind.ai",
    phone: "+91 98765 43211",
  },
];

const TrainWithUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">
              Personal <span className="text-primary">Coaching</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with our expert trainers for personalized one-on-one coaching to achieve your fitness goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={`${trainer.name} - ${trainer.specialty}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-sm text-primary mb-1">{trainer.role}</p>
                  <p className="text-sm text-muted-foreground mb-2">{trainer.experience}</p>
                  <p className="text-sm font-medium mb-4">{trainer.specialty}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${trainer.email}`} className="hover:text-primary transition-colors">
                        {trainer.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-primary" />
                      <a href={`tel:${trainer.phone}`} className="hover:text-primary transition-colors">
                        {trainer.phone}
                      </a>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Contact for Personal Training
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainWithUs;
