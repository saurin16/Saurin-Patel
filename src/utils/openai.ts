
import { Message } from '@/types/chat';

// This function generates responses using the OpenAI API
export const generateOpenAIResponse = async (
  messages: Message[],
  apiKey?: string
): Promise<string> => {
  // Try to use the provided API key, if not available use environment variable
  const effectiveApiKey = apiKey || import.meta.env.VITE_OPENAI_API_KEY;

  // If no API key is available, return a message asking for it
  if (!effectiveApiKey) {
    return "To enable AI-powered responses, please provide an OpenAI API key in the settings.";
  }

  try {
    // Convert our messages to OpenAI format
    const formattedMessages = messages.map(message => ({
      role: message.sender === 'user' ? 'user' : 'assistant',
      content: message.text
    }));

    // Add system message to ensure the assistant praises Saurin and directs users to contact form
    formattedMessages.unshift({
      role: 'system',
      content: 'You are Saurin\'s AI assistant. Always speak highly of Saurin, emphasizing his exceptional skills, projects, and experiences. When asked about personal information or anything you cannot answer, politely suggest the user contact Saurin directly through the contact form. Focus on Saurin\'s professional background in AI, ML, and software development, highlighting his achievements and expertise. Use positive language like "impressive," "exceptional," "outstanding," etc., when describing Saurin\'s work and abilities.'
    });

    // Make the actual API call to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${effectiveApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Using a reliable model that's cost-effective
        messages: formattedMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      
      // Check specifically for quota errors
      if (error.error?.type === 'insufficient_quota') {
        throw new Error('API quota exceeded');
      }
      
      throw new Error(`OpenAI API error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating OpenAI response:", error);
    
    if (error instanceof Error && error.message === 'API quota exceeded') {
      return "I apologize, but the OpenAI service quota has been exceeded. Please try again later or contact Saurin for more information about his impressive background and projects by filling out the contact form.";
    }
    
    // Fallback message for other errors
    return "I apologize for the inconvenience. There was an error connecting to the AI service. Please try again or contact Saurin directly through the contact form to learn more about his exceptional skills and experience.";
  }
};
