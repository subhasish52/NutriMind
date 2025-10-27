import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-athlete-doing-weight-lifting-23-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Stats Badges */}
      <div className="absolute top-24 right-8 z-20 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <div className="text-2xl font-bold text-primary">+ 1300</div>
          <div className="text-xs text-muted-foreground">Positive Reviews</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <div className="text-2xl font-bold text-primary">+ 80</div>
          <div className="text-xs text-muted-foreground">Coaches</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <div className="text-2xl font-bold text-primary">+ 1000</div>
          <div className="text-xs text-muted-foreground">Workout Videos</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <div className="text-2xl font-bold text-primary">+ 1500</div>
          <div className="text-xs text-muted-foreground">Trainers</div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Achieve Your
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary italic">
              FITNESS GOALS
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              With FitMaker
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              "Join The FitMaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?"
            </p>

            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">96%</div>
              <div className="text-sm font-semibold mb-1">Client Satisfaction</div>
              <div className="text-xs text-muted-foreground">
                Our Members Love Their Results And Experience
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">+5</div>
              <div className="text-sm font-semibold mb-1">Years Of Experience</div>
              <div className="text-xs text-muted-foreground">
                Trust In Our Proven Track Record Of Transforming Lives
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">+800</div>
              <div className="text-sm font-semibold mb-1">Active Members</div>
              <div className="text-xs text-muted-foreground">
                Join Our Thriving Fitness Community
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-semibold mb-1">Support Available</div>
              <div className="text-xs text-muted-foreground">
                Expert Assistance Whenever You Need It
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
