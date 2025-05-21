
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gispace-gray/20 px-4">
        <div className="text-center max-w-2xl mx-auto py-20">
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-gispace-purple mb-4">404</h1>
          <p className="text-xl md:text-2xl mb-6">Oops! We can't find the page you're looking for.</p>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-gispace-purple hover:bg-gispace-dark-purple text-white px-8 py-6 text-lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
