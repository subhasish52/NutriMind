import { motion } from 'framer-motion';
import anytimeLogo from '@/assets/gym-logo-anytime.png';
import cultfitLogo from '@/assets/gym-logo-cultfit.png';
import goldsLogo from '@/assets/gym-logo-golds.png';
import fitnessFirstLogo from '@/assets/gym-logo-fitnessfirst.png';
import snapLogo from '@/assets/gym-logo-snap.png';
import talwalkarsLogo from '@/assets/gym-logo-talwalkars.png';
import anytimeGym from '@/assets/gym-anytime.jpg';
import cultfitGym from '@/assets/gym-cultfit.jpg';
import goldsGym from '@/assets/gym-golds.jpg';

const GymAffiliations = () => {
  const gyms = [
    { 
      name: 'Anytime Fitness', 
      location: 'Bhubaneswar, Patia', 
      distance: '2.5 km',
      logo: anytimeLogo,
      image: anytimeGym
    },
    { 
      name: 'Cult.fit', 
      location: 'Bhubaneswar, Saheed Nagar', 
      distance: '3.8 km',
      logo: cultfitLogo,
      image: cultfitGym
    },
    { 
      name: "Gold's Gym", 
      location: 'Bhubaneswar, Jaydev Vihar', 
      distance: '5.2 km',
      logo: goldsLogo,
      image: goldsGym
    },
    { 
      name: 'Fitness First', 
      location: 'Bhubaneswar, Chandrasekharpur', 
      distance: '4.1 km',
      logo: fitnessFirstLogo,
      image: anytimeGym
    },
    { 
      name: 'Snap Fitness', 
      location: 'Bhubaneswar, Kharavel Nagar', 
      distance: '6.3 km',
      logo: snapLogo,
      image: cultfitGym
    },
    { 
      name: 'Talwalkars', 
      location: 'Bhubaneswar, Patia', 
      distance: '3.5 km',
      logo: talwalkarsLogo,
      image: goldsGym
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Affiliated <span className="text-primary">Gyms</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partner gyms where you can train with our personalized plans
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 animate-scroll"
            style={{
              width: 'max-content',
            }}
          >
            {[...gyms, ...gyms].map((gym, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % gyms.length) * 0.1 }}
                className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all min-w-[280px]"
              >
                <div className="relative mb-4 rounded-lg overflow-hidden h-40">
                  <img 
                    src={gym.image} 
                    alt={gym.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded text-sm font-semibold">
                    {gym.distance}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={gym.logo} 
                    alt={`${gym.name} logo`}
                    className="w-12 h-12 object-contain bg-white rounded p-1"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{gym.name}</h3>
                    <p className="text-sm text-muted-foreground">{gym.location}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <span className="text-xs text-primary font-semibold">✓ Certified Partner</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GymAffiliations;
