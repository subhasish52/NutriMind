import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const GymFinder = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-77.0369, 38.9072], // Washington DC
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add example gym markers
    const gyms = [
      { name: "FitMaker Gym Downtown", coordinates: [-77.0369, 38.9072] },
      { name: "FitMaker Gym North", coordinates: [-77.0169, 38.9272] },
      { name: "FitMaker Gym South", coordinates: [-77.0569, 38.8872] },
    ];

    gyms.forEach((gym) => {
      const marker = new mapboxgl.Marker({ color: "#DC2626" })
        .setLngLat(gym.coordinates as [number, number])
        .setPopup(new mapboxgl.Popup().setHTML(`<strong>${gym.name}</strong>`))
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleSearch = () => {
    if (location && map.current) {
      // In a real app, you would geocode the location and move the map
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
            Discover FitMaker partner gyms in your area and start your fitness journey today
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

          {/* Mapbox Token Input (Temporary) */}
          {!mapboxToken && (
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Setup Required</h3>
              <p className="text-sm text-muted-foreground mb-4">
                To enable the map, please enter your Mapbox public token. Get yours at{" "}
                <a
                  href="https://mapbox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
              <div className="flex gap-4">
                <Input
                  placeholder="pk.eyJ1Ijo..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline">Save Token</Button>
              </div>
            </div>
          )}

          {/* Map Container */}
          <div className="relative rounded-lg overflow-hidden border-2 border-border shadow-2xl">
            <div ref={mapContainer} className="h-[500px] w-full" />
            {!mapboxToken && (
              <div className="absolute inset-0 bg-card/90 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Map View</p>
                  <p className="text-sm text-muted-foreground">Enter your Mapbox token above to enable the map</p>
                </div>
              </div>
            )}
          </div>

          {/* Gym List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { name: "FitMaker Gym Downtown", address: "123 Fitness St, DC", distance: "0.5 mi" },
              { name: "FitMaker Gym North", address: "456 Health Ave, DC", distance: "1.2 mi" },
              { name: "FitMaker Gym South", address: "789 Wellness Blvd, DC", distance: "2.1 mi" },
            ].map((gym, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border hover:border-primary transition-all"
              >
                <h3 className="font-bold mb-2">{gym.name}</h3>
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
