
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CollectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  position?: 'left' | 'right';
}

const Collection: React.FC<CollectionProps> = ({
  title,
  description,
  image,
  link,
  position = 'right'
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className={cn(
        "order-2",
        position === 'left' ? "md:order-2" : "md:order-1"
      )}>
        <div className="relative overflow-hidden rounded-lg group">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
        </div>
      </div>

      <div className={cn(
        "order-1 flex flex-col justify-center",
        position === 'left' ? "md:order-1 md:pr-12" : "md:order-2 md:pl-12"
      )}>
        <h2 className="heading-lg mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={link} 
          className="font-medium text-gispace-purple hover:text-gispace-dark-purple transition-colors underline decoration-2 decoration-gispace-pink underline-offset-4"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  );
};

const CollectionsSection = () => {
  return (
    <section id="collections" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 section-title">Our Collections</h2>
          <p className="subheading">Discover our carefully curated collections, designed to elevate your style with timeless elegance and contemporary flair.</p>
        </div>

        <div className="space-y-24">
          <Collection 
            title="Kids Collection" 
            description="Bright, playful, and comfy — our kids' dresses are made for every little adventure.
From twirling florals to stylish casuals, each piece blends charm with comfort.
Perfect for birthdays, outings, or everyday fun — style your little one with love!"
            image="/child-7248693.jpg"
            link="https://chat.whatsapp.com/F1kiwgMF0STGCVu95Rv2f0"
            position="right"
          />

          <Collection 
            title="Party Collection" 
            description="Chic, colorful, and crafted with care — our girls' dresses are made to shine.
From elegant frocks to everyday flair, each design brings out her unique style.
Perfect for parties, playdates, and everything in between!"
            image="/woman-3439787.jpg"
            link="https://chat.whatsapp.com/F1kiwgMF0STGCVu95Rv2f0"
            position="left"
          />

          <Collection 
            title="Kurti Collection" 
            description="Grace meets tradition in our beautifully crafted girls' Kurti dresses.
With vibrant colors, soft fabrics, and elegant designs, they're perfect for every occasion — from festivals to family gatherings.
Let her shine in ethnic charm with a modern twist!"
            image="/anarkali-kurta-6954528.jpg"
            link="https://chat.whatsapp.com/F1kiwgMF0STGCVu95Rv2f0"
            position="right"
          />

               <Collection 
            title="Princess Collection" 
            description="Step into a fairytale with our Princess Collection — crafted for the bride who dreams big.
From majestic wedding gowns to dazzling reception ensembles, every piece radiates royal elegance.
Be the queen of your day in timeless beauty and unforgettable style."
            image="/woman-4081760.jpg"
            link="https://chat.whatsapp.com/F1kiwgMF0STGCVu95Rv2f0"
            position="left"
          />
          <Collection 
            title="Traditional Collection" 
            description="Celebrate timeless tradition with our exquisite sarees, designer blouses, and elegant pavadai dhavanis.
Rich fabrics, intricate embroidery, and graceful drapes — perfect for the bride and every wedding moment.
Step into heritage with style, and let every detail speak of culture and beauty."
            image="/woman-5763248.jpg"
            link="https://chat.whatsapp.com/F1kiwgMF0STGCVu95Rv2f0"
            position="right"
          />
  
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
