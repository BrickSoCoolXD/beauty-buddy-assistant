import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to the bottom of the messages container
  useEffect(() => {
    if (messagesEndRef.current && isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen]);

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
          <div className="flex-1 overflow-hidden">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/iJ8eJaOrEyo8lrY0BzG0W"
              width="100%"
              style={{ height: '100%', minHeight: '500px' }}
              frameBorder="0"
              title="Chatbase Chatbot"
            />
            <div ref={messagesEndRef} />
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-12 h-12 flex items-center justify-center bg-indigo-600 text-white">
          <MessageCircle />
        </Button>
      )}
    </div>
  );
};

export default Chatbot;
