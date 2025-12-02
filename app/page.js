'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // Hero carousel images
  const heroImages = [
    '/hero_image.jpg',
    '/hero-1.jpg',
    '/hero-2.jpg',
    '/hero-3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <div className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <motion.div 
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 2 }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      </div>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/about" 
                className="inline-block bg-[#CA6B32] text-white border border-[#CA6B32] px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-white hover:text-[#CA6B32] transition-all"
              >
                About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Featured Projects</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto mb-12">
              Explore our carefully curated selection of exceptional architectural and interior design projects.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Project 1: Alexa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <Link href="/projects/8" className="block">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/1b5bdf8a-39a0-42de-84dc-fc8523dd28b6.jpg" 
                  alt="Alexa" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-light mb-2">Alexa</h3>
                <p className="text-neutral-500 text-sm mb-3">Residential</p>
                <p className="text-neutral-600 text-sm">Gota, Ahmedabad</p>
              </div>
            </Link>
          </motion.div>

          {/* Project 2: DELF Corporate Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <Link href="/projects/10" className="block">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/p_0005.jpg" 
                  alt="DELF Corporate Office" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-light mb-2">DELF Corporate Office</h3>
                <p className="text-neutral-500 text-sm mb-3">Commercial</p>
                <p className="text-neutral-600 text-sm">Panjrapole, Ahmedabad</p>
              </div>
            </Link>
          </motion.div>

          {/* Project 3: Gym @ Sun Evoq */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <Link href="/projects/14" className="block">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/g-1.jpg" 
                  alt="Gym @ Sun Evoq" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-light mb-2">Gym @ Sun Evoq</h3>
                <p className="text-neutral-500 text-sm mb-3">Commercial</p>
                <p className="text-neutral-600 text-sm">Sindhubhavan Road, Ahmedabad</p>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/projects" 
              className="inline-block bg-[#CA6B32] text-white border border-[#CA6B32] px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-white hover:text-[#CA6B32] transition-all"
            >
              View More Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}