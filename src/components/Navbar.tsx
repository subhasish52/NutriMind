import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              Nutri<span className="text-primary">Mind</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center">
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/our-services" className="block px-4 py-2 hover:bg-accent transition-colors">
                  Our Services
                </Link>
                <Link to="/subscription" className="block px-4 py-2 hover:bg-accent transition-colors">
                  Track/Buy Subscription
                </Link>
                <Link to="/tools" className="block px-4 py-2 hover:bg-accent transition-colors">
                  Our Fitness Tools
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors flex items-center">
                Train With Us
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/train-with-us" className="block px-4 py-2 hover:bg-accent transition-colors">
                  Personal Coaching
                </Link>
                <Link to="/train-with-ai" className="block px-4 py-2 hover:bg-accent transition-colors">
                  Train with nutrimind.ai
                </Link>
              </div>
            </div>

            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <User size={18} className="mr-2" />
                    {user?.name}
                  </Button>
                </Link>
                <Button onClick={handleLogout} className="bg-primary hover:bg-primary/90">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary hover:bg-primary/90">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </Link>
              <Link to="/our-services" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Our Services
              </Link>
              <Link to="/subscription" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Track/Buy Subscription
              </Link>
              <Link to="/tools" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Our Fitness Tools
              </Link>
              <Link to="/train-with-us" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Personal Coaching
              </Link>
              <Link to="/train-with-ai" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Train with nutrimind.ai
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors py-2">
                Contact Us
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                        <User size={18} className="mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Button onClick={handleLogout} className="bg-primary hover:bg-primary/90 w-full">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsOpen(false)}>
                      <Button className="bg-primary hover:bg-primary/90 w-full">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
