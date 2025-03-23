
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-black/60">
      <div className="container-custom">
   
         
        
          
          <div>
            <h3 className="text-8xl font-Audiowide font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="text-diskyo-red mr-2" size={16} />
                <a href="mailto:hello@diskyo.com" className="text-gray-400 hover:text-diskyo-red transition-colors">
                diskcuser@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-diskyo-red mr-2" size={16} />
                <a href="tel:+916307906234" className="text-gray-400 hover:text-diskyo-red transition-colors">
                  +91 6307906234
                </a>
               
                <span>,</span>
                <a href="tel:+918218545188" className="text-gray-400 hover:text-diskyo-red transition-colors">
                +91 8218545188
                </a>
              </li>
            </ul>
            <div className="flex my-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Instagram size={20} />
              </a>
              
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Linkedin size={20} />
              </a>
             
              <a href="#" className="text-gray-400 hover:text-diskyo-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="mt-6">
           
              <div className="flex">
              
             
              
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Disk C. All rights reserved.
          </p>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
