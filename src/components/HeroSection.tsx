import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1a1a 50%, #3d1a1a 100%)',
      }}
    >
      {/* Background Overlay with Gradient */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at right, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Image Background - Trainer */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '50%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 2,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, transparent 40%)',
          }}
        />
      </div>

      {/* Stats Badges */}
      <div 
        style={{
          position: 'absolute',
          top: '120px',
          right: '40px',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '12px',
            padding: '12px 20px',
          }}
        >
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>+ 1300</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Positive Reviews</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '12px',
            padding: '12px 20px',
          }}
        >
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>+ 80</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Coaches</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '12px',
            padding: '12px 20px',
          }}
        >
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>+ 1000</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Workout Videos</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(220, 38, 38, 0.3)',
            borderRadius: '12px',
            padding: '12px 20px',
          }}
        >
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#DC2626' }}>+ 1500</div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Trainers</div>
        </motion.div>
      </div>

      {/* Content */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 20px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: '#ffffff',
                lineHeight: '1.1',
              }}
            >
              Achieve Your
            </h1>
            <h1 
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                marginBottom: '24px',
                color: '#DC2626',
                fontStyle: 'italic',
                lineHeight: '1.1',
              }}
            >
              FITNESS GOALS
            </h1>
            <h1 
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                marginBottom: '32px',
                color: '#ffffff',
                lineHeight: '1.1',
              }}
            >
              With FitMaker
            </h1>
            <p 
              style={{
                fontSize: '16px',
                color: '#d1d5db',
                marginBottom: '40px',
                maxWidth: '600px',
                lineHeight: '1.6',
              }}
            >
              "Join The FitMaker Community And Transform Your Fitness Journey. Our Expert Coaches And Personalized Programs Are Designed To Help You Achieve Your Goals And Exceed Your Expectations. Ready To Make A Change?"
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button 
                size="lg" 
                style={{
                  fontSize: '18px',
                  padding: '24px 40px',
                  background: '#DC2626',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                style={{
                  fontSize: '18px',
                  padding: '24px 40px',
                  background: 'transparent',
                  color: '#ffffff',
                  border: '2px solid rgba(220, 38, 38, 0.5)',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(220, 38, 38, 0.3)',
          zIndex: 10,
        }}
      >
        <div 
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '24px 20px',
          }}
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>96%</div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#ffffff' }}>Client Satisfaction</div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                Our Members Love Their Results And Experience
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>+5</div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#ffffff' }}>Years Of Experience</div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                Trust In Our Proven Track Record Of Transforming Lives
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>+800</div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#ffffff' }}>Active Members</div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                Join Our Thriving Fitness Community
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#DC2626', marginBottom: '8px' }}>24/7</div>
              <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px', color: '#ffffff' }}>Support Available</div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>
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
