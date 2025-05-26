
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  isLoading: boolean;
  chatConfig: {
    useOpenAI: boolean;
  };
  hasEnvApiKey: boolean;
}

const ChatInput = ({ 
  input, 
  setInput, 
  handleSend, 
  isLoading,
  chatConfig,
  hasEnvApiKey
}: ChatInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="p-3 border-t border-border">
      <div className="flex">
        <Input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-muted focus-visible:ring-portfolio-light"
        />
        <Button 
          onClick={handleSend} 
          disabled={!input.trim() || isLoading}
          className="ml-2 bg-portfolio-light text-portfolio-navy hover:bg-portfolio-light/80"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs text-portfolio-slate">
          {hasEnvApiKey ? "Powered by OpenAI using Saurin's API key." : "Powered by OpenAI. Please provide an API key in settings."}
        </p>
        {isLoading && <p className="text-xs text-portfolio-light animate-pulse">Assistant is thinking...</p>}
      </div>
    </div>
  );
};

export default ChatInput;
