
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const CurrentProjectsSection = () => {
  const currentProjects = [
    {
      title: "Advanced RAG Architecture",
      description: "Developing a sophisticated Retrieval-Augmented Generation system with multi-vector search, hybrid ranking, and dynamic chunk selection to enhance LLM response accuracy and reduce hallucinations.",
      tech: ["LangChain", "LangGraph", "FAISS", "Llama 3", "Python", "FastAPI"],
      progress: 65
    },
    {
      title: "AI Feature Extraction Platform",
      description: "Building an AI-powered platform that extracts structured data from unstructured documents using advanced NLP techniques, multimodal embeddings, and few-shot learning.",
      tech: ["PyTorch", "Transformers", "OpenAI", "React", "FastAPI", "MongoDB"],
      progress: 40
    },
    {
      title: "Agentic AI Task Management",
      description: "Creating an autonomous agent system that can plan, execute, and refine complex multi-step tasks with human feedback using ReAct prompting and tool augmentation.",
      tech: ["LangGraph", "TypeScript", "Next.js", "GPT-4o", "Vector Database", "Redis"],
      progress: 25
    }
  ];

  return (
    <section id="current" className="section-container">
      <h2 className="section-title">What I'm Working On</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <Card key={project.title} className="bg-muted border-none overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-portfolio-lightest-slate">{project.title}</h3>
              <p className="text-portfolio-slate mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="w-full bg-portfolio-navy rounded-full h-2">
                  <div 
                    className="bg-portfolio-light h-2 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-portfolio-light mt-1">{project.progress}% Complete</p>
              </div>
              
              <div className="flex flex-wrap">
                {project.tech.map((tech) => (
                  <span key={tech} className="skill-tag">{tech}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-portfolio-slate">
        <p className="flex items-center justify-center">
          <span>Check back often for updates on these projects</span>
          <ArrowRight className="ml-2 h-4 w-4 text-portfolio-light" />
        </p>
      </div>
    </section>
  );
};

export default CurrentProjectsSection;
