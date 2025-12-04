'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/hero-1.jpg"
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Priority for the first image
                sizes="100vw"
                unoptimized={true}
              />
            </div>
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-light text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Designview Architects
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white font-light max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Crafting spaces that inspire and endure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link 
              href="/projects" 
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">About Us</h2>
            <div className="w-24 h-px bg-accent-600 mx-auto mb-8"></div>
            <p className="text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              At Designview Architects, we believe that great design transforms lives. With over a decade of experience in architectural and interior design, we specialize in creating spaces that are not only visually stunning but also deeply functional and sustainable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Architecture</h3>
              <p className="text-neutral-600">
                Innovative architectural solutions that blend functionality with aesthetic excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Interior Design</h3>
              <p className="text-neutral-600">
                Comprehensive interior design services that create functional, aesthetically pleasing environments.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Landscape Design</h3>
              <p className="text-neutral-600">
                Thoughtful outdoor design solutions that seamlessly blend natural elements with architectural features.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Featured Projects</h2>
            <div className="w-24 h-px bg-accent-600 mx-auto mb-8"></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our portfolio of meticulously crafted projects that showcase our commitment to excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1: Alexa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Link href="/projects/8" className="block">
                <div className="h-64 overflow-hidden relative">
                  <Image 
                    src="/1b5bdf8a-39a0-42de-84dc-fc8523dd28b6.jpg" 
                    alt="Alexa" 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={true}
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
                <div className="h-64 overflow-hidden relative">
                  <Image 
                    src="/p_0005.jpg" 
                    alt="DELF Corporate Office" 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={true}
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
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Link href="/projects/14" className="block">
                <div className="h-64 overflow-hidden relative">
                  <Image 
                    src="/g-1.jpg" 
                    alt="Gym @ Sun Evoq" 
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={true}
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link 
              href="/projects" 
              className="inline-block border border-accent-600 text-accent-600 px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-accent-600 hover:text-white transition-all duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}