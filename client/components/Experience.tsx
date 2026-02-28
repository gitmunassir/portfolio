'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  _id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  techUsed: string[];
}

// Static experience data - will be replaced with API data
const staticExperiences: Experience[] = [
  {
    _id: '1',
    company: 'WebKul',
    role: 'Software Engineer',
    location: 'Lucknow, Uttar Pradesh',
    startDate: '2022-04-01',
    endDate: null,
    current: true,
    description: 'AI-Augmented Development with GitHub Copilot and Cursor AI, reducing boilerplate coding time by ~40%. Built custom Magento modules, configured MCP servers for Claude AI integration, and developed AI agent pipelines for automation.',
    techUsed: ['Magento 2', 'PHP', 'AWS', 'GitHub Copilot', 'Claude AI', 'Cursor AI', 'MCP', 'GraphQL', 'REST APIs'],
  },
];

export default function Experience() {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building scalable eCommerce solutions
            with cutting-edge AI integration.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-blue-500" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {staticExperiences.map((exp, index) => (
              <motion.div
                key={exp._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-6 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass p-6 rounded-lg hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Date & Location */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techUsed.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
