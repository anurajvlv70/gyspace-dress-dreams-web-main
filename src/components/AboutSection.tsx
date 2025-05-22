
import React from 'react';
import { Sparkles, Layers, GalleryHorizontal } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 transition-all duration-300 hover:bg-white hover:shadow-md rounded-lg">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gispace-purple/10 text-gispace-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 section-title">About GiSPACE</h2>
          <p className="subheading">
            We're more than just a dress store - we're a destination for women who value quality, style, and self-expression.
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Feature
              icon={<Sparkles size={24} />}
              title="Quality Materials"
              description="Each piece in our collection is crafted from premium materials, ensuring comfort, durability, and long-lasting beauty."
            />
            <Feature
              icon={<Layers size={24} />}
              title="Thoughtful Design"
              description="Our designs blend timeless elegance with contemporary flair, creating versatile pieces that elevate every occasion."
            />
            <Feature
              icon={<GalleryHorizontal size={24} />}
              title="Curated Collections"
              description="Carefully curated collections that reflect the latest trends while maintaining a timeless and sophisticated aesthetic."
            />
          </div>
        </div>

        <div className="bg-gispace-gray/30 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="heading-md mb-4">Our Story</h3>
              <p className="text-gray-700 mb-4">
                Founded in 2024, GiSPACE was born from a passion for beautiful design and a belief that every woman deserves to feel confident and elegant in what she wears.
              </p>
              <p className="text-gray-700 mb-6">
                Our founder, inspired by her own journey of self-expression through fashion, created GiSPACE as a space where style meets quality, and where every piece tells a story of craftsmanship and attention to detail.
              </p>
              <a href="/" className="inline-block font-medium text-gispace-purple hover:text-gispace-dark-purple transition-colors">
                Read our full story →
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img 
                  src="/antique-1838324.jpg" 
                  alt="Our Store" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
