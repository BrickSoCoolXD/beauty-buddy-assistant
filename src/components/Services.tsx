import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Camera, Gift, Package } from 'lucide-react';

const services = [
  {
    title: "Personalized Beauty Consultations",
    description: "Get expert advice tailored to your unique needs via video call.",
    icon: Video
  },
  {
    title: "Virtual Skin Analysis",
    description: "Receive product recommendations based on our advanced skin analysis technology.",
    icon: Camera
  },
  {
    title: "Gift Wrapping",
    description: "Complimentary gift wrapping for special occasions with personalized messages.",
    icon: Gift
  },
  {
    title: "Subscription Boxes",
    description: "Receive curated beauty products monthly, tailored to your preferences.",
    icon: Package
  }
];

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-8 w-8 text-indigo-600" />
                <CardTitle className="mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;