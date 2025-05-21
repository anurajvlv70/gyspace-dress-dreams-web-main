
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-gispace-pink/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-8">
            Connect with other fashion enthusiasts and get exclusive updates, style tips, and special offers through our WhatsApp community.
          </p>
          
          <div className="flex justify-center">
            <Button 
              className="bg-gispace-purple hover:bg-gispace-dark-purple text-white font-medium px-6 py-6 h-auto text-base"
              onClick={() => window.open("https://chat.whatsapp.com/F1kiwgMF0STGCVu95Rv2f0", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Join our WhatsApp Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
