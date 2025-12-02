'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">About Us</h1>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-24"
        >
          <p className="text-neutral-600 text-justify leading-relaxed mb-4">
            With a legacy that began in 1997, Designview Architects has grown into one of the region's most trusted names in architecture and interior design. With 25+ years of experience in the industry, our studio has consistently delivered innovative, functional, and emotionally engaging spaces across residential, commercial, and institutional sectors.
          </p>
          <p className="text-neutral-600 text-justify leading-relaxed mb-4">
            Over the decades, we have successfully completed 500+ projects, each reflecting our commitment to quality craftsmanship, design excellence, and client satisfaction. Our work is a testament to our belief that every space has a story—and it deserves to be told with clarity, character, and purpose.
          </p>
          <p className="text-neutral-600 text-justify leading-relaxed">
            At Designview Architects, we don't just design spaces—we create environments that elevate everyday living, enrich human experiences, and stand the test of time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-light mb-6">Our Philosophy</h2>
            <p className="text-neutral-600 mb-6 leading-relaxed text-justify">
              Our philosophy is simple: design with purpose, build with integrity, and create with vision. At Designview Architects, we look beyond trends to craft spaces that remain relevant, functional, and emotionally engaging for years to come.
            </p>
            <p className="text-neutral-600 mb-6 leading-relaxed text-justify">
              We believe true design excellence comes from understanding how people live, work, and interact. This insight empowers us to shape interiors that balance beauty with practicality, innovation with comfort, and creativity with timeless appeal.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="overflow-hidden rounded-lg"
          >
            <img 
              src="/modern.jpg"
              alt="Interior Design Studio"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-light mb-8 text-center">Our Approach</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center p-6 flex-1">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Discover</h3>
              <p className="text-neutral-600 text-justify">
                We begin by deeply understanding your lifestyle, preferences, and vision to create a design that truly reflects you.
              </p>
            </div>
            
            <div className="hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="text-center p-6 flex-1">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Design</h3>
              <p className="text-neutral-600 text-justify">
                Our team crafts a bespoke design concept, combining aesthetics with functionality to bring your vision to life.
              </p>
            </div>
            
            <div className="hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="text-center p-6 flex-1">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Deliver</h3>
              <p className="text-neutral-600 text-justify">
                We oversee every detail of the implementation process, ensuring the highest quality and attention to your satisfaction.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}