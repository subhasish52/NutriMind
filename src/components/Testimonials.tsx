import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Steven Haward",
    role: "Our Trainer",
    text: "I've Been Using nutrimind.ai For The Past Three Months, And I'm Genuinely Impressed. The Website Is Easy To Navigate And Everything Is Laid Out Clearly. I Purchased The Premium Plan And The Personalized Coaching Has Been A Game-Changer For Me. My Coach Is Incredibly Supportive And Always Available To Answer My Questions. The Custom Meal Plans Have Helped Me Stay On Track With My Goals. Highly Recommend For Anyone Serious About Their Fitness Journey!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At This Part You Can See Few Of The Many Positive Reviews Of Our Customers.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Testimonial Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary rounded-lg" />
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/30 to-secondary rounded-lg mt-8" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="bg-card p-8 rounded-lg border border-border relative">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/20" />
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-1">{testimonials[0].name}</h3>
                <p className="text-sm text-muted-foreground">{testimonials[0].role}</p>
              </div>
              <p className="text-muted-foreground mb-6">{testimonials[0].text}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
