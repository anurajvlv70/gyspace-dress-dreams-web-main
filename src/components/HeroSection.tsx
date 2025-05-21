
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={cn("relative h-screen flex items-center overflow-hidden", className)}>
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url(/girl-7750577.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left relative">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/80 backdrop-blur-sm text-gispace-purple px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-left">
            Space for Kids & Ladies
          </span>
          <h1 className="heading-xl text-white mb-4 opacity-0 animate-fade-in-delay-1">
            Elegance Defined
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg opacity-0 animate-fade-in-delay-2">
            Discover the perfect blend of style, comfort and sophistication in our latest collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-delay-3">
            <a href="#collections" className="btn-primary">
              Explore Collection
            </a>
            {/* <a href="/shop" className="bg-white text-gispace-purple hover:bg-gispace-pink transition-all px-8 py-3 rounded-lg inline-block font-medium">
              Shop Now
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
