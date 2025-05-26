
import React from 'react';
import { X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatSettings from './ChatSettings';

interface ChatHeaderProps {
  setIsOpen: (isOpen: boolean) => void;
  chatConfig: {
    useOpenAI: boolean;
  };
}

const ChatHeader = ({ setIsOpen, chatConfig }: ChatHeaderProps) => {
  return (
    <div className="bg-portfolio-navy p-3 rounded-t-lg flex justify-between items-center border-b border-border">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-portfolio-light text-portfolio-navy flex items-center justify-center mr-3">
          <span className="font-bold">SP</span>
        </div>
        <div>
          <h3 className="font-medium text-portfolio-lightest-slate">Saurin's Assistant</h3>
          <p className="text-xs text-portfolio-slate">
            {chatConfig.useOpenAI ? "Powered by OpenAI" : "Ask me anything about Saurin"}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <ChatSettings />
        <button 
          onClick={() => setIsOpen(false)}
          className="text-portfolio-slate hover:text-portfolio-light"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
