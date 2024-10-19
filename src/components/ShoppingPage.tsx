import React, { useState } from 'react';
import FeaturedProducts from './FeaturedProducts';
import { useToast } from '@/components/ui/use-toast';

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

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div>
      <FeaturedProducts onAddToCart={handleAddToCart} />
      <div className="mt-10">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingPage;
