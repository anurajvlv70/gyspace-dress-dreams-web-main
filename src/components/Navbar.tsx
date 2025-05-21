
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tight">
              Gi<span className="text-gispace-purple">SPACE</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-gispace-purple transition-colors font-medium">
              Home
            </Link>
            <Link to="/" className="text-foreground hover:text-gispace-purple transition-colors font-medium">
              About
            </Link>
            <Link to="/" className="text-foreground hover:text-gispace-purple transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gispace-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 p-4 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="text-lg font-medium p-2 hover:bg-gispace-gray rounded" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="text-lg font-medium p-2 hover:bg-gispace-gray rounded" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="text-lg font-medium p-2 hover:bg-gispace-gray rounded" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
