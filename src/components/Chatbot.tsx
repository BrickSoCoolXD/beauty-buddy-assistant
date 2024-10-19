import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      }, 1000);
    }
  };

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('dry skin') || lowerInput.includes('hydration')) {
      return "For dry skin, I recommend the CeraVe Daily Moisturizing Lotion. It provides intense hydration without being greasy. You might also like The Ordinary Hyaluronic Acid 2% + B5 serum for extra moisture. Would you like more information about these products?";
    } else if (lowerInput.includes('foundation') || lowerInput.includes('coverage')) {
      return "For natural-looking coverage, I suggest the Estée Lauder Double Wear Stay-in-Place Foundation. It offers buildable coverage while maintaining a lightweight feel. Would you like to know more about its features?";
    } else if (lowerInput.includes('frizzy hair') || lowerInput.includes('hair management')) {
      return "For frizzy hair, try the OGX Renewing + Argan Oil of Morocco Shampoo and Conditioner duo. They help reduce frizz and add shine. The Tresemme Thermal Creations Heat Tamer Spray is also great for taming flyaways. Shall I provide more details about these products?";
    } else {
      return "Thank you for your question. To better assist you, could you please provide more details about your specific skincare, makeup, or hair care needs? For example, what's your skin type or what kind of look are you aiming for?";
    }
  };

  const handleImageUpload = () => {
    toast({
      title: "Image Upload",
      description: "This feature is not yet implemented. We apologize for the inconvenience.",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-indigo-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Bosar Cosmetics Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4 text-white" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-indigo-100' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t flex">
            <Input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 mr-2"
            />
            <Button onClick={handleSendMessage} size="icon">
              <Send className="h-4 w-4" />
            </Button>
            <Button onClick={handleImageUpload} size="icon" className="ml-2">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-12 h-12 flex items-center justify-center">
          <MessageCircle />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;