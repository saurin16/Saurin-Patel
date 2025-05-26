
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Message } from '@/types/chat';

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages = ({ messages, isLoading }: ChatMessagesProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="h-80 overflow-y-auto p-4">
      {messages.map((msg) => (
        <div 
          key={msg.id} 
          className={cn(
            "mb-4 max-w-[80%] p-3 rounded-lg",
            msg.sender === 'user' 
              ? "ml-auto bg-portfolio-light text-portfolio-navy" 
              : "bg-muted border border-border"
          )}
        >
          <p>{msg.text}</p>
          <p className="text-xs mt-1 opacity-70">
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      ))}
      {isLoading && (
        <div className="flex space-x-2 p-3 max-w-[80%] rounded-lg bg-muted border border-border">
          <div className="w-2 h-2 bg-portfolio-slate rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-portfolio-slate rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-portfolio-slate rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
