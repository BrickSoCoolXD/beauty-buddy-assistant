import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Here you would typically send the message to a backend API
      // and get a response. For now, we'll just simulate a response.
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          text: "Thank you for your message. How can I assist you today?", 
          sender: 'bot' 
        }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-4 bg-indigo-600 text-white rounded-t-lg">
            <h3 className="font-bold">Bosar Cosmetics Assistant</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-indigo-100' : 'bg-gray-200'}`}>
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="ml-2">Send</Button>
            </div>
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