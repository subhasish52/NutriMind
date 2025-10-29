import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import gymMap from "@/assets/gym-map.jpg";
import cultfitLogo from "@/assets/gym-cultfit.jpg";
import goldsLogo from "@/assets/gym-golds.jpg";
import anytimeLogo from "@/assets/gym-anytime.jpg";

const GymFinder = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location) {
      // In a real app, you would geocode the location and update the map
      console.log("Searching for gyms near:", location);
    }
  };

  return (
    <section id="gym-finder" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find a Gym <span className="text-primary">Near Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover nutrimind.ai partner gyms in your area and start your fitness journey today
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Enter your location (e.g., Washington DC)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 bg-card"
              />
            </div>
            <Button onClick={handleSearch}>
              <Search className="h-5 w-5 mr-2" /> Search
            </Button>
          </div>

          {/* Map Container */}
          <div className="relative rounded-lg overflow-hidden border-2 border-border shadow-2xl">
            <img 
              src={gymMap} 
              alt="Gym locations map" 
              className="h-[500px] w-full object-cover"
            />
            <Button 
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 hover:bg-white/90 font-semibold"
            >
              View larger map
            </Button>
          </div>

          {/* Gym List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { name: "CultFit Gym Downtown", address: "123 Fitness St, DC", distance: "0.5 mi", logo: cultfitLogo },
              { name: "Gold's Gym North", address: "456 Health Ave, DC", distance: "1.2 mi", logo: goldsLogo },
              { name: "Anytime Fitness South", address: "789 Wellness Blvd, DC", distance: "2.1 mi", logo: anytimeLogo },
            ].map((gym, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={gym.logo} alt={gym.name} className="w-12 h-12 object-contain rounded" />
                  <h3 className="font-bold">{gym.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{gym.address}</p>
                <p className="text-sm text-primary font-semibold">{gym.distance} away</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GymFinder;
