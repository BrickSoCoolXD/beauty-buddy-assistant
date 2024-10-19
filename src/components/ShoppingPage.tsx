import React, { useState, useRef } from 'react';
import FeaturedProducts from './FeaturedProducts';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

// Define Product type
interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
}

const ShoppingPage = () => {
  const [cart, setCart] = useState<Product[]>([]); // Specify Product type for cart
  const { toast } = useToast();
  const cartIconRef = useRef<HTMLDivElement | null>(null); // Ref for the cart icon
  const [cartAnimation, setCartAnimation] = useState<{ x: number; y: number } | null>(null); // State for animation position

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAnimateCart = (position: { x: number; y: number }) => {
    setCartAnimation(position); // Set the position for animation
    // Optionally, reset the animation after a delay
    setTimeout(() => setCartAnimation(null), 1000); // Adjust duration as needed
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price;
  }, 0);

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <div
          ref={cartIconRef}
          className="relative cursor-pointer"
        >
          <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
            {/* Cart Icon */}
            <span>🛒</span>
          </div>
          {/* Animation Effect */}
          {cartAnimation && (
            <div
              className="absolute w-4 h-4 bg-indigo-600 rounded-full"
              style={{
                transform: `translate(${cartAnimation.x}px, ${cartAnimation.y}px)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            />
          )}
        </div>
      </div>
      <FeaturedProducts onAddToCart={handleAddToCart} onAnimateCart={handleAnimateCart} />
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="py-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              <p className="text-lg font-bold">{item.price}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Total: {totalPrice.toFixed(2)}</h3>
          <Button className="mt-4 w-full bg-indigo-600 text-white hover:bg-indigo-700">
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingPage;
