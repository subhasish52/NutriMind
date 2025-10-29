import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolsComponent from '@/components/Tools';

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ToolsComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
