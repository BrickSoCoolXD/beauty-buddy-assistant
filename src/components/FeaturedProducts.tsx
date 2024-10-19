import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    name: "Cetaphil Gentle Skin Cleanser",
    category: "Skincare",
    price: "$10.99",
    image: "https://ik.imagekit.io/anuje5ihf/image.png"
  },
  {
    name: "Estée Lauder Double Wear Stay-in-Place Foundation",
    category: "Makeup",
    price: "$43.00",
    image: "https://ik.imagekit.io/anuje5ihf/image(11).png"
  },
  {
    name: "OGX Renewing + Argan Oil of Morocco Shampoo",
    category: "Haircare",
    price: "$8.99",
    image: "https://ik.imagekit.io/anuje5ihf/image(24).png"
  },
  {
    name: "Chanel Chance Eau Tendre",
    category: "Fragrances",
    price: "$105.00",
    image: "https://ik.imagekit.io/anuje5ihf/image(36).png"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-lg font-bold mt-2">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;