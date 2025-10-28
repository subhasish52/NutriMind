import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

const OurServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default OurServices;
