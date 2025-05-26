
import React, { useContext } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { ChatContext } from './ChatContext';

const ChatSettings = () => {
  const { chatConfig, setChatConfig, hasEnvApiKey } = useContext(ChatContext);
  
  const toggleOpenAI = (enabled: boolean) => {
    setChatConfig(prev => ({ ...prev, useOpenAI: enabled }));
    if (enabled && !chatConfig.apiKey && !hasEnvApiKey) {
      toast({
        title: "API Key Required",
        description: "Please provide your OpenAI API key in the settings to enable AI-powered responses.",
        variant: "destructive"
      });
    } else if (enabled && hasEnvApiKey) {
      toast({
        title: "OpenAI Mode Enabled",
        description: "Using pre-configured API key. Note that if usage limits are exceeded, the chat will automatically switch to local mode."
      });
    } else if (!enabled) {
      toast({
        title: "Local Mode Enabled",
        description: "Using pre-defined responses about Saurin's experience and projects."
      });
    }
  };

  const saveApiKey = (key: string) => {
    setChatConfig(prev => ({ ...prev, apiKey: key }));
    localStorage.setItem('openai_api_key', key);
    toast({
      title: "API key saved",
      description: "Your OpenAI API key has been saved securely in your browser's local storage."
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-1 text-portfolio-slate hover:text-portfolio-light">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chat Assistant Settings</DialogTitle>
          <DialogDescription>
            Configure how the chat assistant responds to questions.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Use OpenAI</Label>
              <p className="text-sm text-muted-foreground">
                Enable AI-powered responses using OpenAI's API
              </p>
            </div>
            <Switch 
              checked={chatConfig.useOpenAI}
              onCheckedChange={toggleOpenAI}
            />
          </div>
          
          {chatConfig.useOpenAI && !hasEnvApiKey && (
            <div className="space-y-2">
              <Label htmlFor="apiKey">OpenAI API Key</Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="sk-..."
                value={chatConfig.apiKey || ''}
                onChange={(e) => saveApiKey(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Your API key is stored locally in your browser and is never sent to our servers.
              </p>
            </div>
          )}
          
          {hasEnvApiKey && (
            <div className="rounded-md bg-muted p-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">OpenAI API key is pre-configured.</span> If usage limits are reached, the chat will automatically switch to local mode.
              </p>
            </div>
          )}
          
          <div className="rounded-md bg-slate-800 p-3 mt-2">
            <p className="text-sm text-slate-300">
              <span className="font-medium text-portfolio-light">Local Mode:</span> When OpenAI is disabled or unavailable, the chat will use pre-defined answers about Saurin's experience, projects, and skills.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button 
            onClick={() => {
              if (chatConfig.useOpenAI && !chatConfig.apiKey && !hasEnvApiKey) {
                toast({
                  title: "API Key Required",
                  description: "Please provide your OpenAI API key to enable AI-powered responses.",
                  variant: "destructive"
                });
              }
            }}
            className="bg-portfolio-light text-portfolio-navy hover:bg-portfolio-light/90"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChatSettings;
