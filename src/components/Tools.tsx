import { motion } from "framer-motion";
import { Calculator, Activity, Scale, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: Calculator,
    title: "CALORIE CALCULATOR",
    description: "Calculate your daily calorie needs based on your goals and activity level.",
  },
  {
    icon: Scale,
    title: "BMI CALCULATOR",
    description: "Determine your Body Mass Index and understand your health status.",
  },
  {
    icon: Activity,
    title: "MACRONUTRIENT CALCULATOR",
    description: "Get personalized macro ratios for optimal nutrition and performance.",
  },
  {
    icon: Target,
    title: "GOAL SETTING TOOL",
    description: "Set achievable fitness goals and track your progress effectively.",
  },
  {
    icon: TrendingUp,
    title: "MACRONUTRIENT CALCULATOR",
    description: "Track your progress and see your improvements over time.",
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Fitness <span className="text-primary">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access A Variety Of Tools To Help You Reach Your Fitness Goals More Effectively
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group text-center"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <tool.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
              <Button variant="link" className="text-primary">
                Learn More →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
