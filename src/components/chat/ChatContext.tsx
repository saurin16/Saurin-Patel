
import React, { createContext, useState, useEffect } from 'react';
import { ChatConfig } from '@/types/chat';

interface ChatContextProps {
  chatConfig: ChatConfig;
  setChatConfig: React.Dispatch<React.SetStateAction<ChatConfig>>;
  hasEnvApiKey: boolean;
}

export const ChatContext = createContext<ChatContextProps>({
  chatConfig: { useOpenAI: false },
  setChatConfig: () => {},
  hasEnvApiKey: false
});

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check if there's an environment variable for the API key
  const hasEnvApiKey = !!import.meta.env.VITE_OPENAI_API_KEY;
  
  const [chatConfig, setChatConfig] = useState<ChatConfig>({
    useOpenAI: hasEnvApiKey, // Auto-enable if we have an env API key
    apiKey: localStorage.getItem('openai_api_key') || undefined
  });

  return (
    <ChatContext.Provider value={{ chatConfig, setChatConfig, hasEnvApiKey }}>
      {children}
    </ChatContext.Provider>
  );
};
