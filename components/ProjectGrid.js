'use client';

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}