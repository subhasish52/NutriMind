import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

const trainers = [
  {
    name: "Arjun Sharma",
    role: "Personal Trainer",
    specialty: "Strength Training & Weight Loss",
    image: trainer1,
  },
  {
    name: "Rohan Patel",
    role: "Personal Trainer",
    specialty: "CrossFit & Conditioning",
    image: trainer3,
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-primary">Trainers</span>
            </h2>
            <p className="text-muted-foreground">
              At This Part You Can See Few Of The Many Positive Reviews Of Our Customers.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
                <p className="text-sm text-primary mb-2">{trainer.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{trainer.specialty}</p>
                <Button variant="link" className="text-primary p-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg">
            View All →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
