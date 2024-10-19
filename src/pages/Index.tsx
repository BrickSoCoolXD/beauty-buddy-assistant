import React, { useState } from 'react';
import { Toaster } from "@/components/ui/sonner";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Cart from '@/components/Cart';
import ShoppingPage from '@/components/ShoppingPage';

interface Product {
  name: string;
  price: string;
  category: string;
  image: string;
}

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster />
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <FeaturedProducts onAddToCart={handleAddToCart} onAnimateCart={() => console.log('Animating cart...')} />
      <Chatbot />
      <Services />
      <Footer />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />
    </div>
  );
};

export default Index;