
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 w-full z-10">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/0c989138-2deb-4c58-a212-548d2df9e071.png" 
              alt="DiskYo Logo" 
              className="h-12 w-12 rounded-md" 
            />
            <span className="text-2xl font-bold gradient-text">DiskYo</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-diskyo-red text-diskyo-red hover:bg-diskyo-red hover:text-white">
            Login
          </Button>
          <Button className="gradient-btn">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-sm p-4 border-t border-gray-800 z-50">
          <nav className="flex flex-col space-y-4 py-4">
            <a href="#features" className="px-4 py-2 rounded-md hover:bg-gray-800" onClick={toggleMenu}>
              Features
            </a>
            <a href="#pricing" className="px-4 py-2 rounded-md hover:bg-gray-800" onClick={toggleMenu}>
              Pricing
            </a>
            <a href="#faq" className="px-4 py-2 rounded-md hover:bg-gray-800" onClick={toggleMenu}>
              FAQ
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="border-diskyo-red text-diskyo-red hover:bg-diskyo-red hover:text-white">
                Login
              </Button>
              <Button className="gradient-btn">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
