'use client';

import { motion } from 'framer-motion';
import { 
  Code2, Database, Cloud, Wrench, Bot 
} from 'lucide-react';

interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency: number;
}

const categories = [
  { id: 'frontend', name: 'Frontend', icon: Code2 },
  { id: 'backend', name: 'Backend', icon: Code2 },
  { id: 'database', name: 'Database', icon: Database },
  { id: 'cloud', name: 'Cloud', icon: Cloud },
  { id: 'tools', name: 'Tools', icon: Wrench },
  { id: 'ai', name: 'AI Tools', icon: Bot },
];

// Static skills data - will be replaced with API data
const staticSkills: Skill[] = [
  { _id: '1', name: 'React', category: 'frontend', proficiency: 90 },
  { _id: '2', name: 'Next.js', category: 'frontend', proficiency: 85 },
  { _id: '3', name: 'JavaScript', category: 'frontend', proficiency: 95 },
  { _id: '4', name: 'TailwindCSS', category: 'frontend', proficiency: 90 },
  { _id: '5', name: 'Magento', category: 'backend', proficiency: 95 },
  { _id: '6', name: 'PHP', category: 'backend', proficiency: 90 },
  { _id: '7', name: 'Node.js', category: 'backend', proficiency: 85 },
  { _id: '8', name: 'Express', category: 'backend', proficiency: 80 },
  { _id: '9', name: 'MongoDB', category: 'database', proficiency: 85 },
  { _id: '10', name: 'MySQL', category: 'database', proficiency: 90 },
  { _id: '11', name: 'AWS', category: 'cloud', proficiency: 80 },
  { _id: '12', name: 'Git', category: 'tools', proficiency: 90 },
  { _id: '13', name: 'GitHub Copilot', category: 'ai', proficiency: 95 },
  { _id: '14', name: 'Cursor AI', category: 'ai', proficiency: 90 },
  { _id: '15', name: 'Claude AI', category: 'ai', proficiency: 85 },
];

export default function Skills() {
  const skillsByCategory = categories.map(cat => ({
    ...cat,
    skills: staticSkills.filter(s => s.category === cat.id),
  }));

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills built over years of professional experience
            and continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsByCategory.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
