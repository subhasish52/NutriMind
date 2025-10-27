import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GymFinder from "@/components/GymFinder";
import Services from "@/components/Services";
import Plans from "@/components/Plans";
import Tools from "@/components/Tools";
import Trainers from "@/components/Trainers";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="train">
        <HeroSection />
        <GymFinder />
        <Services />
        <Plans />
        <Tools />
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
