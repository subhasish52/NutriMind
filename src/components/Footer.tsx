import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              nutrimind<span className="text-primary">.ai</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Transform Your Body with nutrimind.ai, Your Trusted Partner in Fitness. With Over 5 Years of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Fitness Tools
                </Link>
              </li>
              <li>
                <Link to="/workout-videos" className="text-muted-foreground hover:text-primary transition-colors">
                  Workout Videos
                </Link>
              </li>
              <li>
                <Link to="/nutrition" className="text-muted-foreground hover:text-primary transition-colors">
                  Nutrition Guides
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-muted-foreground hover:text-primary transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>USA - Washington DC</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>1234-56789</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>contact@nutrimind.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} nutrimind.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
