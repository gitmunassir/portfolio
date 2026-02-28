'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { useState } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
  images: string[];
  featured: boolean;
}

// Static projects data - will be replaced with API data
const staticProjects: Project[] = [
  {
    _id: '1',
    title: 'Enterprise eCommerce Platform',
    description: 'Built a scalable multi-store eCommerce platform using Magento 2 with custom modules, optimized for 10M+ SKUs. Integrated AI tools for intelligent catalog management and automated workflows.',
    shortDescription: 'Scalable multi-store eCommerce platform with AI integration',
    techStack: ['Magento 2', 'PHP', 'MySQL', 'AWS', 'AI/ML'],
    githubLink: '#',
    liveDemoLink: '#',
    images: [],
    featured: true,
  },
  {
    _id: '2',
    title: 'AI-Powered Checkout System',
    description: 'Developed a tailored checkout flow with AI-driven fraud detection signals and secure payment gateway integrations using Stripe, PayPal, and other payment providers.',
    shortDescription: 'Smart checkout with AI fraud detection',
    techStack: ['React', 'Node.js', 'Stripe', 'AI/ML', 'GraphQL'],
    githubLink: '#',
    liveDemoLink: '#',
    images: [],
    featured: true,
  },
  {
    _id: '3',
    title: 'Multichannel Integration Hub',
    description: 'Connected 30+ Shopify stores into Magento ecosystems using AI-generated mapping logic. Built real-time inventory synchronization reducing stock discrepancies by 25%.',
    shortDescription: 'Unified multichannel eCommerce solution',
    techStack: ['Magento', 'Shopify', 'Node.js', 'GraphQL', 'REST API'],
    githubLink: '#',
    liveDemoLink: '#',
    images: [],
    featured: true,
  },
  {
    _id: '4',
    title: 'MCP-Driven Code Assistant',
    description: 'Configured Model Context Protocol (MCP) servers connecting Claude AI to live Magento environments for real-time code suggestions and automated refactoring.',
    shortDescription: 'AI-powered development environment',
    techStack: ['Claude AI', 'MCP', 'Magento', 'TypeScript', 'Docker'],
    githubLink: '#',
    liveDemoLink: '#',
    images: [],
    featured: false,
  },
  {
    _id: '5',
    title: 'RAG-Based Support Bot',
    description: 'Prototyped a Retrieval-Augmented Generation (RAG) chatbot for Magento store customer support using LangChain and OpenAI APIs.',
    shortDescription: 'AI chatbot for customer support',
    techStack: ['LangChain', 'OpenAI', 'React', 'Node.js', 'Vector DB'],
    githubLink: '#',
    liveDemoLink: '#',
    images: [],
    featured: false,
  },
  {
    _id: '6',
    title: 'AI Reporting Dashboard',
    description: 'Built Magento dashboards with AI-generated insights for sales analytics, customer behavior patterns, and predictive analytics for decision-making.',
    shortDescription: 'Analytics dashboard with AI insights',
    techStack: ['React', 'D3.js', 'Python', 'TensorFlow', 'MongoDB'],
    githubLink: '#',
    liveDemoLink: '#',
    images: [],
    featured: false,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise in building scalable eCommerce solutions
            with cutting-edge AI integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                <Layers className="w-16 h-16 text-muted-foreground/30" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubLink && project.githubLink !== '#' && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveDemoLink && project.liveDemoLink !== '#' && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-muted-foreground mb-6">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {selectedProject.liveDemoLink && selectedProject.liveDemoLink !== '#' && (
                <a
                  href={selectedProject.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>

            <button
              className="mt-6 text-muted-foreground hover:text-primary"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
