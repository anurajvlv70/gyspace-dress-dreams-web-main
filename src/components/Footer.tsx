
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Instagram, Facebook, Twitter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gispace-gray pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Layers className="h-6 w-6 text-gispace-purple mr-2" />
              <span className="font-serif text-xl font-bold tracking-tight">
                Gi<span className="text-gispace-purple">SPACE</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              Thaliparamba,Kannur 670142
              9072955013

            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/gispace__?igsh=ZG9vY2x0bTF0c3Rt" className="text-gray-500 hover:text-gispace-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gispace-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gispace-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gispace-purple transition-colors">Home</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gispace-purple transition-colors">Shop</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gispace-purple transition-colors">Collections</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gispace-purple transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gispace-purple transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4">Help & Information</h3>
            <ul className="space-y-2">
              <li><a className="text-gray-600 hover:text-gispace-purple transition-colors">Customer Service</a></li>
              <li><a className="text-gray-600 hover:text-gispace-purple transition-colors">Shipping & Returns</a></li>
              <li><a className="text-gray-600 hover:text-gispace-purple transition-colors">Size Guide</a></li>
              <li><a className="text-gray-600 hover:text-gispace-purple transition-colors">FAQ</a></li>
              <li><a className="text-gray-600 hover:text-gispace-purple transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">Join our newsletter and receive the latest updates, offers, and style tips.</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" className="border-gispace-purple/30 focus:border-gispace-purple" />
              <Button type="submit" className="bg-gispace-purple hover:bg-gispace-dark-purple text-white transition-colors">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} GiSPACE. All rights reserved. Designed and Maintained by <a href="https://www.weblysi.in/">WebLysi</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
