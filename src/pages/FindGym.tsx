import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";

const FindGym = () => {
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
              Find a <span className="text-primary">Gym Near You</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover nutrimind.ai partner gyms in your area and start your fitness journey today.
            </p>

            <div className="max-w-2xl mx-auto flex gap-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="Enter your location" className="pl-10" />
              </div>
              <Button size="lg">
                <Search className="h-5 w-5 mr-2" /> Search
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg border border-border">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">nutrimind.ai Gym #{i}</h3>
                <p className="text-muted-foreground mb-4">123 Fitness Street, City</p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FindGym;
