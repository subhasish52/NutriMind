import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "LOSING WEIGHT",
    subtitle: "Click To Join Our Losing Weight Plans",
    description:
      "Achieve Sustainable Weight Loss Goals Through Personalized Nutrition Plans And Effective Exercise Programs Designed To Help You Shed Fat And Build A Healthier Body Shape That Makes You Even More Healthy Than Ever Before.",
    gradient: "from-primary/20 to-background",
  },
  {
    title: "BUILDING MUSCLE",
    subtitle: "Click To Join Our Building Muscle Plans",
    description:
      "Develop Strength And Define Your Muscles With Tailored Strength Training Programs And Nutrition Plans Designed To Gain Lean Muscle Mass More Lean. You Can Lean More And Grow More To The Training Flow And Train More Than Ever Before.",
    gradient: "from-primary/20 to-background",
  },
  {
    title: "TRAINING IN HOME",
    subtitle: "Click To Join Our Ultimate Home Plans",
    description:
      "Stay Fit And Strong With Our Flexible Home Workout Programs Perfect For Your Busy Schedule That Require Minimal Equipment. You Can Train Anytime, To A Better Shape And Lifestyle Without Leaving Your Home.",
    gradient: "from-primary/20 to-background",
  },
  {
    title: "GYM PLAN",
    subtitle: "Click, Enter Your Details, Get Your Plans",
    description:
      "Maximize Your Gym Sessions With Structured Plans That Offer Expert Guidance On The Workout Plans That Suit Your Goals. Whether You're Building Muscles Or Losing Weight And Getting You Fit For Your Fitness Goals.",
    gradient: "from-primary/20 to-background",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At This Part You Can Easily Access All Of Our Services. Take A Look At Them And Chose Wich Ever You Want.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${service.gradient} p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group`}
            >
              <h3 className="text-primary text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm font-medium mb-4">{service.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
              <Button
                variant="outline"
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
