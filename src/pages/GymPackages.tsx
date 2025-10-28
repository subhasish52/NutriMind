import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Plans from "@/components/Plans";
import { motion } from "framer-motion";

const GymPackages = () => {
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
              Gym <span className="text-primary">Packages</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan that fits your fitness goals and budget. All plans include access to our expert trainers and supportive community.
            </p>
          </motion.div>
          <Plans />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GymPackages;
