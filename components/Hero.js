'use client';

import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, backgroundImage }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 md:px-12">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-light text-white mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white font-light max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}