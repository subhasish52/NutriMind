import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GymFinder from "@/components/GymFinder";
import GymAffiliations from "@/components/GymAffiliations";
import Trainers from "@/components/Trainers";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="train">
        <HeroSection />
        {isAuthenticated && user && (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center">
              Welcome Back, <span className="text-primary">{user.name}</span>!
            </h2>
          </div>
        )}
        <GymFinder />
        <GymAffiliations />
        <Trainers />
        <Blog />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
