'use client';

import { useState, useEffect } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Plus, Edit, Trash2, ExternalLink, Github, Loader2 } from 'lucide-react';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink: string;
  featured: boolean;
}

// Typed motion component to fix TypeScript className issue
const MotionDiv = (props: HTMLMotionProps<'div'> & React.HTMLAttributes<HTMLDivElement>) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <motion.div {...(props as any)} />
);

export default function ProjectsManagement() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shortDescription: '',
    techStack: '',
    githubLink: '',
    liveDemoLink: '',
    featured: false,
  });

  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      techStack: formData.techStack.split(',').map(t => t.trim()),
    };

    try {
      if (editingProject) {
        await axios.put(`/api/projects/${editingProject._id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post('/api/projects', data, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchProjects();
      resetForm();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    
    try {
      await axios.delete(`/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      shortDescription: project.shortDescription,
      techStack: project.techStack.join(', '),
      githubLink: project.githubLink,
      liveDemoLink: project.liveDemoLink,
      featured: project.featured,
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      shortDescription: '',
      techStack: '',
      githubLink: '',
      liveDemoLink: '',
      featured: false,
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={resetForm}
        >
          <MotionDiv
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="glass p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Short Description</label>
                <input
                  type="text"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Full Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={formData.techStack}
                  onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub Link</label>
                  <input
                    type="url"
                    value={formData.githubLink}
                    onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Live Demo Link</label>
                  <input
                    type="url"
                    value={formData.liveDemoLink}
                    onChange={(e) => setFormData({ ...formData, liveDemoLink: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="featured" className="text-sm font-medium">Featured Project</label>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
                >
                  {editingProject ? 'Update Project' : 'Add Project'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 border border-input rounded-lg hover:bg-accent"
                >
                  Cancel
                </button>
              </div>
            </form>
          </MotionDiv>
        </MotionDiv>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <MotionDiv
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass p-6 rounded-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.featured && (
                <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                  Featured
                </span>
              )}
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.shortDescription || project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 bg-secondary rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleEdit(project)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(project._id)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              {project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
