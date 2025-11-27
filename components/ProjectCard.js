'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div 
        className="group cursor-pointer"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="overflow-hidden rounded-lg mb-4">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-80 object-cover transform-scale-hover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-serif font-light group-hover:text-accent-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-col items-end">
            {project.subcategory && (
              <span className="text-xs font-sans uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                {project.subcategory}
              </span>
            )}
            <span className="text-xs font-sans uppercase tracking-wider text-neutral-500 bg-neutral-100 px-2 py-1 rounded mt-1">
              {project.category}
            </span>
          </div>
        </div>
        {project.area && (
          <p className="text-sm text-neutral-500 mt-2">{project.area}</p>
        )}
      </motion.div>
    </Link>
  );
}