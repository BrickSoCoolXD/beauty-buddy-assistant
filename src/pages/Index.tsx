import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;