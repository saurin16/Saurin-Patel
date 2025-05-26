
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, MapPin, Send, Twitter } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Submitting contact form:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error('Error calling edge function:', error);
        throw error;
      }

      console.log('Email sent successfully:', data);
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error: any) {
      console.error('Failed to send email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly at spatel213@hawk.iit.edu",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
        {/* Contact form - Full width on mobile, 3 columns on large screens */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-portfolio-lightest-slate">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border focus-visible:ring-portfolio-light text-sm"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-portfolio-lightest-slate">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted border-border focus-visible:ring-portfolio-light text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="subject" className="block text-sm font-medium text-portfolio-lightest-slate">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can I help you?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-muted border-border focus-visible:ring-portfolio-light text-sm"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-portfolio-lightest-slate">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-muted border-border focus-visible:ring-portfolio-light text-sm resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full sm:w-auto btn-primary"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
        
        {/* Contact info - Full width on mobile, 2 columns on large screens */}
        <div className="lg:col-span-2 order-1 lg:order-2 space-y-6">
          <div className="bg-muted p-4 lg:p-6 rounded-lg">
            <h3 className="text-portfolio-lightest-slate text-lg lg:text-xl font-semibold mb-3 lg:mb-4">Contact Information</h3>
            <ul className="space-y-3 lg:space-y-4">
              <li className="flex items-center">
                <Mail className="text-portfolio-light mr-3 h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                <a 
                  href="mailto:spatel213@hawk.iit.edu" 
                  className="text-portfolio-slate hover:text-portfolio-light text-sm lg:text-base break-all"
                >
                  spatel213@hawk.iit.edu
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="text-portfolio-light mr-3 h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                <span className="text-portfolio-slate text-sm lg:text-base">Chicago, IL</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-muted p-4 lg:p-6 rounded-lg">
            <h3 className="text-portfolio-lightest-slate text-lg lg:text-xl font-semibold mb-3 lg:mb-4">Connect With Me</h3>
            <div className="flex space-x-3 lg:space-x-4">
              <a 
                href="https://github.com/saurin16" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 lg:p-3 bg-portfolio-navy rounded-full text-portfolio-slate hover:text-portfolio-light transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/psaurin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 lg:p-3 bg-portfolio-navy rounded-full text-portfolio-slate hover:text-portfolio-light transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 lg:p-3 bg-portfolio-navy rounded-full text-portfolio-slate hover:text-portfolio-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-muted p-4 lg:p-6 rounded-lg">
            <h3 className="text-portfolio-lightest-slate text-lg lg:text-xl font-semibold mb-2 lg:mb-3">Availability</h3>
            <p className="text-portfolio-slate mb-2 text-sm lg:text-base">
              Currently available for freelance projects and full-time opportunities.
            </p>
            <p className="text-portfolio-light font-medium text-sm lg:text-base">
              Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
