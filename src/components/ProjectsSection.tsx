
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demoUrl?: string;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "AI Customer Support Assistant",
      description: "Engineered an Agentic-AI chatbot with sentiment analysis, dynamic query routing, and conversation memory for real-time issue resolution, reducing customer response time by 40%.",
      stack: ["LangGraph", "BERT", "Tokenization", "Embeddings", "Llama 3.3 70B", "Gradio", "FastAPI"],
      github: "https://github.com/saurin16/ai-customer-support",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=3270&h=2000"
    },
    {
      title: "Multi-Agent AI Query System",
      description: "Designed a multi-agent AI system enabling dynamic query resolution using Llama 3.3-70B and GPT-4o-mini, integrating real-time web search (Tavily) for enhanced response accuracy.",
      stack: ["LangGraph", "Groq", "NLP", "OpenAI", "FastAPI", "Streamlit", "Tavily"],
      github: "https://github.com/saurin16/multi-agent-ai",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=3172&h=2000"
    },
    {
      title: "AI Career Coach",
      description: "Developed full-stack application using Next.js, Neon DB(PostgreSQL), Prisma, Inngest, and Shadcn UI with Gemini, providing personalized career guidance for 200+ users.",
      stack: ["Next.js", "PostgreSQL", "Gemini", "NeonDB", "Prisma", "Shadcn UI"],
      github: "https://github.com/saurin16/ai-career-coach",
      demoUrl: "https://ai-career-coach-seven-delta.vercel.app/",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=3270&h=2000"
    },
    {
      title: "Crew Agent Generator",
      description: "Built an interactive tool that translates natural language prompts into structured CrewAI agent/task setups with auto-generated Python code for seamless AI workflow creation.",
      stack: ["Streamlit", "OpenAI", "GPT-4o-mini", "Python"],
      github: "https://github.com/saurin16/crew-agent-generator",
      image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?auto=format&fit=crop&q=80&w=3270&h=2000"
    },
    {
      title: "ReAct-RAG-Based Medical Assistant",
      description: "Developed a ReAct-based medical assistant using OpenAI, LangGraph and FAISS for dynamic patient data retrieval from CSV and PDF sources, enhancing healthcare decision-making.",
      stack: ["LangGraph", "FAISS", "OpenAI", "FastAPI", "RAG"],
      github: "https://github.com/saurin16/medical-assistant",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=3021&h=2000"
    },
    {
      title: "Realtime Stock Market Analysis",
      description: "Engineered a real-time data pipeline with Python and Apache Kafka, streaming financial data to AWS S3. Implemented AWS Glue and Athena for scalable SQL-based trend analysis.",
      stack: ["Python", "Apache Kafka", "AWS S3", "AWS Glue", "AWS Athena", "SQL"],
      github: "https://github.com/saurin16/stock-market-analysis",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&q=80&w=3270&h=2000"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className="overflow-hidden bg-muted border-none hover:translate-y-[-5px] transition-transform duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-portfolio-navy opacity-70"></div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-portfolio-lightest-slate">{project.title}</h3>
                <div className="flex space-x-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-slate hover:text-portfolio-light"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-portfolio-slate hover:text-portfolio-light"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-portfolio-slate mb-4">{project.description}</p>
              
              <div className="flex flex-wrap mt-4">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://github.com/saurin16" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;
