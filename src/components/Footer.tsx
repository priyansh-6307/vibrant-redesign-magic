
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-black/60">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/0c989138-2deb-4c58-a212-548d2df9e071.png" 
                alt="DiskYo Logo" 
                className="h-10 w-10 rounded-md" 
              />
              <span className="text-xl font-bold gradient-text">DiskYo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional YouTube content creation service that helps businesses grow their audience without the hassle of video production.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-diskyo-red transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-diskyo-red transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-diskyo-red transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="text-diskyo-red mr-2" size={16} />
                <a href="mailto:hello@diskyo.com" className="text-gray-400 hover:text-diskyo-red transition-colors">
                  hello@diskyo.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-diskyo-red mr-2" size={16} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-diskyo-red transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-900 border border-gray-800 rounded-l-md px-4 py-2 focus:outline-none focus:border-diskyo-red text-gray-300"
                />
                <Button className="gradient-btn rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DiskYo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-diskyo-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-diskyo-red transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-diskyo-red transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
