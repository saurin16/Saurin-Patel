
import React from 'react';
import { MessageSquare, X } from "lucide-react";
import { cn } from '@/lib/utils';
import ChatHeader from './chat/ChatHeader';
import ChatMessages from './chat/ChatMessages';
import ChatInput from './chat/ChatInput';
import { ChatContext, ChatProvider } from './chat/ChatContext';
import { useChat } from './chat/useChat';

const ChatbotContent = () => {
  const { isOpen, setIsOpen, messages, input, setInput, isLoading, handleSend } = useChat();
  const chatContext = React.useContext(ChatContext);
  
  return (
    <>
      {/* Chatbot toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-portfolio-light text-portfolio-navy rounded-full p-3 shadow-lg z-40 hover:bg-portfolio-light/80 transition-all"
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
      
      {/* Chatbot window */}
      <div 
        className={cn(
          "fixed bottom-20 right-6 bg-muted border border-border w-80 md:w-96 rounded-lg shadow-xl transition-all duration-300 z-30",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        )}
      >
        <ChatHeader 
          setIsOpen={setIsOpen}
          chatConfig={chatContext.chatConfig}
        />
        
        <ChatMessages 
          messages={messages}
          isLoading={isLoading}
        />
        
        <ChatInput 
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          isLoading={isLoading}
          chatConfig={chatContext.chatConfig}
          hasEnvApiKey={chatContext.hasEnvApiKey}
        />
      </div>
    </>
  );
};

const ChatbotSection = () => {
  return (
    <ChatProvider>
      <ChatbotContent />
    </ChatProvider>
  );
};

export default ChatbotSection;
