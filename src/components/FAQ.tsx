import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What Is nutrimind.ai And How Can It Help Me Reach My Fitness Goals?",
    answer:
      "nutrimind.ai Is An Online Fitness Platform That Offers Personalized Workout Plans, Expert Coaching, And Comprehensive Nutritional Guidance. Whether You're Looking To Lose Weight, Build Muscle, Or Simply Stay Fit, Our Tailored Programs And Community Support Will Help You Achieve Your Fitness Goals.",
  },
  {
    question: "How Do I Get Started With A Workout Plan On nutrimind.ai?",
    answer:
      "Getting started is easy! Simply sign up for an account, complete our fitness assessment questionnaire, and choose a plan that fits your goals. Our system will generate a personalized workout plan based on your fitness level, preferences, and objectives.",
  },
  {
    question: "What Is Included In The Custom Plan?",
    answer:
      "The Custom Plan includes fully personalized workout and nutrition plans, weekly one-on-one check-ins with your dedicated trainer, priority customer support, body composition analysis, and exclusive discounts on fitness gear. It's our most comprehensive offering designed for serious fitness enthusiasts.",
  },
  {
    question: "Can I Change My Plan After Signing Up?",
    answer:
      "Absolutely! You can upgrade or change your plan at any time from your account settings. If you want to switch plans, the changes will take effect at the start of your next billing cycle. Our team is always here to help you choose the best plan for your evolving fitness needs.",
  },
  {
    question: "What Kind Of Support Can I Expect From My Trainer?",
    answer:
      "Your trainer provides personalized guidance throughout your fitness journey. Depending on your plan, you'll receive weekly check-ins, form corrections, workout adjustments, nutritional advice, and motivational support. Our trainers are certified professionals committed to helping you succeed.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">FAQ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
