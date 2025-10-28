import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "PRO PLAN",
    price: "99$",
    period: "/MNTH",
    description: "Our Pro Plan Offers Advanced Workouts And Personalized Nutrition Coaching To Help You Reach Your Goals Faster. Sign Up Right Now!",
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Advanced, Personalize Workout Plans",
      "Comprehensive Nutrition Coaching",
      "Weekly Check-Ins With Your Trainer",
      "Body Composition Analysis",
    ],
    popular: false,
    color: "border-primary/50",
  },
  {
    name: "CUSTOM PLAN",
    price: "149$",
    period: "/USDT",
    description: "Experience A Fully Tailored Fitness Experience With A Custom Plan That Works One-On-One With A Dedicated Trainer To Achieve Your Goals.",
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Fully Customized Workout And Nutrition Plan",
      "Weekly Check-Ins With Your Trainer",
      "Priority Customer Support",
      "Exclusive Gear Discounts",
    ],
    popular: true,
    color: "border-primary",
  },
  {
    name: "BEGINNER PLAN",
    price: "49$",
    period: "/MNTH",
    description: "Start Your Fitness Journey With Our Beginner Plan, Build A Strong Foundation With Basic Workouts And Essential Nutrition Guidance.",
    features: [
      "Access To All Of Our Exercise Videos",
      "Progress Tracking",
      "Supportive Online Community",
      "Personalize Workout Plans",
      "Basic Nutrition Guidance",
      "Access To Group Fitness Classes",
    ],
    popular: false,
    color: "border-primary/50",
  },
];

const Plans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Plans</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Select The Plan That Suits Your Fitness Goals And Let Our Expert Coaches Guide You Every Step Of The Way.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={billingCycle === "monthly" ? "default" : "outline"}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "annually" ? "default" : "outline"}
              onClick={() => setBillingCycle("annually")}
            >
              Annually
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-card p-8 rounded-2xl border-2 ${plan.color} ${
                plan.popular ? "scale-105 shadow-2xl shadow-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <p className="text-sm text-primary font-semibold mb-2">Package</p>
                <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">
                  {plan.price}
                  <span className="text-lg text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <Button className="w-full" size="lg" variant={plan.popular ? "default" : "outline"}>
                Choose This Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
