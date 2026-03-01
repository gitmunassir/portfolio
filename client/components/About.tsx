'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { Award, MapPin, Calendar } from 'lucide-react';

// Type alias for motion components with HTML props
type MotionDivProps = HTMLMotionProps<'div'> & React.HTMLAttributes<HTMLDivElement>;

const MotionDiv = ({ children, ...props }: MotionDivProps) => (
  <motion.div {...props}>{children}</motion.div>
);

const stats = [
  { label: 'Adobe Certified', icon: Award, value: 'Professional' },
  { label: 'Location', icon: MapPin, value: 'Lucknow, India' },
  { label: 'Experience', icon: Calendar, value: '3+ Years' },
];

const highlights = [
  'Adobe Certified Professional – Adobe Commerce',
  'Expert in Magento APIs, AWS, and multichannel integrations',
  'AI-augmented development with GitHub Copilot and Cursor AI',
  'Built 30+ platform integrations',
  'Reduced development time by 40% using AI tools',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer specializing in building scalable eCommerce solutions
            with cutting-edge AI tools.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Stats */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-lg text-center"
            >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </MotionDiv>
              ))}
            </div>

            {/* Certifications */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-6 glass rounded-lg"
            >
              <h3 className="font-semibold mb-4">Certifications</h3>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-500" />
                <span>Adobe Certified Professional – Adobe Commerce</span>
              </div>
            </MotionDiv>
          </MotionDiv>

          {/* Right - Content */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              AI-Augmented eCommerce Engineer
            </h3>
            <p className="text-muted-foreground mb-6">
              Adobe Certified Magento Developer with 3+ years of experience building scalable 
              eCommerce solutions, augmented by deep integration of cutting-edge AI tools into 
              every phase of development.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{highlight}</span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
