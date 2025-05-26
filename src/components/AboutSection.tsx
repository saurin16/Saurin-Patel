
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-2/3">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-4 mt-6">
            <p className="text-portfolio-slate">
              Hello! I'm Saurin, a software developer and AI/ML specialist with a passion for building intelligent, scalable systems. My journey in tech started with my curiosity about how digital systems work, which led me to dive deep into software development and artificial intelligence.
            </p>
            <p className="text-portfolio-slate">
              I specialize in AI/ML systems, LLMs, GenAI, and full-stack development. My approach combines technical expertise with a focus on solving real problems for users and businesses alike.
            </p>
            <p className="text-portfolio-slate">
              When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts.
            </p>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-portfolio-lightest-slate mb-4">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <h4 className="text-portfolio-light font-medium mb-2">LLMs & GenAI</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">LangChain</span>
                  <span className="skill-tag">LangGraph</span>
                  <span className="skill-tag">Crew AI</span>
                  <span className="skill-tag">GPT</span>
                  <span className="skill-tag">OpenAI</span>
                  <span className="skill-tag">Llama</span>
                  <span className="skill-tag">RAG</span>
                </div>
              </div>
              <div>
                <h4 className="text-portfolio-light font-medium mb-2">AI/ML & MLOps</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">Scikit-learn</span>
                  <span className="skill-tag">MLflow</span>
                  <span className="skill-tag">FastAPI</span>
                </div>
              </div>
              <div>
                <h4 className="text-portfolio-light font-medium mb-2">Languages</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>
              <div>
                <h4 className="text-portfolio-light font-medium mb-2">Web & Full Stack</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Next.js</span>
                </div>
              </div>
              <div>
                <h4 className="text-portfolio-light font-medium mb-2">Data</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Kafka</span>
                  <span className="skill-tag">Spark</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">Pinecone</span>
                  <span className="skill-tag">Weaviate</span>
                </div>
              </div>
              <div>
                <h4 className="text-portfolio-light font-medium mb-2">Cloud & DevOps</h4>
                <div className="flex flex-wrap">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">GitHub Actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Education and certifications */}
        <div className="md:w-1/3 flex flex-col space-y-6">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-portfolio-lightest-slate mb-3">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-portfolio-light">M.S. Computer Science</h4>
                <p className="text-portfolio-slate">Illinois Institute of Technology</p>
                <p className="text-sm text-portfolio-slate">May 2025 | CGPA: 3.70/4.00</p>
              </div>
              <div>
                <h4 className="font-medium text-portfolio-light">B.S. Information Technology</h4>
                <p className="text-portfolio-slate">University of Mumbai</p>
                <p className="text-sm text-portfolio-slate">May 2023 | CGPA: 3.58/4.00</p>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-portfolio-lightest-slate mb-3">Certifications</h3>
            <ul className="space-y-2 text-portfolio-slate">
              <li>AWS Certified AI Practitioner</li>
              <li>Microsoft Certified: Azure AI Fundamentals</li>
              <li>Microsoft Certified: Azure Data Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
