
export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatConfig {
  useOpenAI: boolean;
  apiKey?: string;
}
