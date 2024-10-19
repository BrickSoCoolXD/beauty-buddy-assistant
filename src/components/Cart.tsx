import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Cart = ({ isOpen, onClose, items }) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = () => {
    // Here you would typically process the payment
    // For now, we'll just close the dialog
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
        </DialogHeader>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
        <div className="mt-4">
          <Label htmlFor="payment">Payment Method</Label>
          <select
            id="payment"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select a payment method</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="apple">Apple Pay</option>
            <option value="google">Google Pay</option>
          </select>
        </div>
        <DialogFooter>
          <Button onClick={handleCheckout}>Checkout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Cart;