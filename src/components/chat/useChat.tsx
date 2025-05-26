
import { useState, useEffect, useContext } from 'react';
import { generateOpenAIResponse } from '@/utils/openai';
import { Message } from '@/types/chat';
import { toast } from '@/hooks/use-toast';
import { ChatContext } from './ChatContext';

export const useChat = () => {
  const { chatConfig, setChatConfig, hasEnvApiKey } = useContext(ChatContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Saurin's AI assistant. Ask me anything about his experience, projects, skills, or education! Saurin is an exceptional AI/ML specialist with impressive achievements in software development.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Display a notification if environment API key is available
  useEffect(() => {
    if (hasEnvApiKey && !localStorage.getItem('apiKeyNoticeShown')) {
      toast({
        title: "AI Assistant Enabled",
        description: "This portfolio uses OpenAI to provide intelligent responses about Saurin's experience.",
      });
      localStorage.setItem('apiKeyNoticeShown', 'true');
    }
  }, [hasEnvApiKey]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input.trim(),
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Use OpenAI for response
      const responseText = await generateOpenAIResponse(
        [...messages, userMessage], 
        chatConfig.apiKey // This will be undefined if using env variable, which is handled in the utility
      );
      
      // Add bot response
      const botMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error in AI response:", error);
      
      // Add error message as bot response
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "I apologize, but I'm having trouble connecting to the AI service. Please try again or contact Saurin directly through the contact form to learn more about his exceptional skills and experience.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isOpen,
    setIsOpen,
    messages,
    input,
    setInput,
    isLoading,
    handleSend,
  };
};
