'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Wrench, Briefcase, MessageSquare, TrendingUp } from 'lucide-react';

interface Stats {
  projects: number;
  skills: number;
  experience: number;
  messages: number;
  unreadMessages: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    projects: 6,
    skills: 15,
    experience: 1,
    messages: 0,
    unreadMessages: 0,
  });
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const statCards = [
    { name: 'Projects', value: stats.projects, icon: FolderKanban, color: 'text-blue-500' },
    { name: 'Skills', value: stats.skills, icon: Wrench, color: 'text-green-500' },
    { name: 'Experience', value: stats.experience, icon: Briefcase, color: 'text-purple-500' },
    { name: 'Messages', value: stats.messages, icon: MessageSquare, color: 'text-orange-500', badge: stats.unreadMessages },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.username || 'Admin'}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={stat.name} className="glass p-6 rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.name}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.color} bg-primary/10`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              {stat.badge !== undefined && stat.badge > 0 && (
                <div className="mt-4">
                  <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                    {stat.badge} unread
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <a
                href="/admin/projects"
                className="block p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                + Manage Projects
              </a>
              <a
                href="/admin/skills"
                className="block p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                + Manage Skills
              </a>
              <a
                href="/admin/experience"
                className="block p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                + Manage Experience
              </a>
            </div>
          </motion.div>
        </div>

        <div className="glass p-6 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">Portfolio Overview</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Portfolio Status</span>
                <span className="px-2 py-1 text-xs bg-green-500/20 text-green-500 rounded-full">
                  Ready
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Last Updated</span>
                <span className="text-sm">Today</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">MongoDB</span>
                <span className="flex items-center gap-1 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  Pending Setup
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
