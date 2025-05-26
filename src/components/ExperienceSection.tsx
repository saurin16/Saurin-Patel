
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Experience {
  company: string;
  title: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      company: "NEW EIC",
      title: "Software Engineer Intern",
      period: "January 2025 - April 2025",
      description: [
        "Built and maintained real-time machine learning pipelines for fraud detection using Apache Kafka and PostgreSQL, processing over 100K transactions daily enriched with telemetry data.",
        "Developed scalable Java microservices and deployed high-throughput RESTful APIs (2000+ RPS) to serve predictive model results with 99.99% uptime and reduced latency by 30% under high-concurrency financial workloads.",
        "Trained and deployed XGBoost models to support automated decision-making, reducing false negatives by 15%, directly enhancing risk containment and response time.",
        "Implemented secure, stateless JWT-based authentication and RBAC using TypeScript and Node.js, bolstering access control and platform security.",
        "Documented key model assumptions, edge cases, and safety mechanisms to enhance model explainability and build stakeholder trust.",
      ],
      technologies: ["Java", "TypeScript", "Microservices", "JWT", "RESTful APIs", "Docker", "GitHub Actions"]
    },
    // {
    //   company: "Fair Observer",
    //   title: "Software Developer Intern",
    //   period: "August 2024 - November 2024",
    //   description: [
    //     "Rebuilt content delivery components with React.js/Node.js, cutting page load times by 25% and increasing user engagement by 15% across a platform serving 1M+ monthly readers.",
    //     "Designed Dockerized CI/CD pipelines, reducing deployment time from 30 minutes to under 10 minutes, accelerating feature releases by 3x.",
    //     "Optimized SQL queries and stored procedures, improving dashboard performance, reducing server load by 40%.",
    //     "Automated testing with Cypress, improving test efficiency and reliability, reducing post-release defects by 60%."
    //   ],
    //   technologies: ["React.js", "Node.js", "Docker", "CI/CD", "SQL", "Cypress"]
    // },
    {
      company: "University of Naples Federico II",
      title: "Research Intern",
      period: "September 2022 - November 2022",
      description: [
        "Led ML model development for land-use classification, improving accuracy by 25%, saving $100K in planning costs.",
        "Fine-tuned CNNs/SVMs with TensorFlow, achieving 92.9% accuracy and 40% less misclassification, securing €5K in grants for continued research into AI-assisted urban planning.",
        "Automated geospatial data preprocessing, enabling scalable input for classification models.",
        "Authored technical report and secured a €5K research extension grant; results published in IEEE conference.",
      ],
      technologies: ["Machine Learning", "CNNs", "SVMs", "TensorFlow", "Classification Models"]
    },
    {
      company: "SAKEC",
      title: "Machine Learning Intern",
      period: "August 2021 - February 2022",
      description: [
        "Designed a deep learning system for detecting brain tumors in MRI with TensorFlow achieving 89.2% accuracy.",
        "Integrated OpenCV for real-time image preprocessing and augmentation to enhance model robustness.",
        "Improved YOLOv7 inference speed by 35% by tuning batch sizes and model weights for GPU usage",
        "Built a Flask-based dashboard for radiologists to visualize predictions and confidence intervals."
      ],
      technologies: ["Machine Learning", "Computer Vision", "YOLOv7", "Image Processing"]
    },
    {
      company: "MoPharma Solutions Ltd",
      title: "Software Developer and QA Intern",
      period: "August 2020 - February 2021",
      description: [
        "Refactored JavaScript/React codebase for a pharmaceutical inventory management system, improving performance by 30% and enabling reliable access for 200+ concurrent users.",
        "Implemented comprehensive testing strategy that reduced bug resolution time by 40% and improved overall software quality for clients managing $10M+ in pharmaceutical inventory.",
        "Applied Agile methodologies that accelerated feature delivery by 25%, allowing clients to respond more quickly to market demands."
      ],
      technologies: ["JavaScript", "React", "QA Testing", "Agile", "Inventory Management"]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Work Experience</h2>
      
      <div className="mt-10">
        <Tabs defaultValue={experiences[0].company} className="w-full">
          <TabsList className="flex flex-wrap mb-6 border-b border-muted bg-transparent">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.company} 
                value={exp.company}
                className="border-b-2 border-transparent data-[state=active]:border-portfolio-light data-[state=active]:bg-transparent data-[state=active]:text-portfolio-light rounded-none px-4 py-2 text-sm transition-all data-[state=active]:shadow-none"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent 
              key={exp.company} 
              value={exp.company}
              className="mt-6"
            >
              <div>
                <h3 className="text-xl font-bold text-portfolio-lightest-slate">
                  {exp.title} <span className="text-portfolio-light">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-portfolio-slate mt-1 mb-4">{exp.period}</p>
                
                <ul className="space-y-3">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex text-portfolio-slate">
                      <span className="text-portfolio-light mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
