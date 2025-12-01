'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">About Designview Architects</h1>
          <div className="w-24 h-px bg-accent-600 mx-auto mb-8"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Crafting spaces that inspire and endure
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-serif font-light mb-6">Our Story</h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Founded with a vision to redefine architectural and interior design standards, Designview Architects has evolved into a premier design firm known for its innovative approach and meticulous attention to detail. Our journey began over a decade ago with a small team of passionate designers committed to creating spaces that seamlessly blend aesthetics with functionality.
            </p>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Today, we stand as a testament to the power of thoughtful design. Our portfolio spans residential, commercial, and institutional projects, each reflecting our unwavering commitment to quality, sustainability, and client satisfaction. We believe that great design has the power to transform lives, enhance well-being, and create lasting value.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We approach each project with fresh eyes and an open mind, ensuring that every space we create is not only beautiful but also deeply personal to its inhabitants. Our collaborative process involves clients at every stage, fostering a partnership that brings their unique vision to life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 overflow-hidden rounded-lg"
          >
            <div className="relative w-full h-96">
              <Image 
                src="/modern.jpg"
                alt="Interior Design Studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Quality</h3>
              <p className="text-neutral-600">
                We maintain the highest standards in design and craftsmanship, ensuring every project exceeds expectations.
              </p>
            </div>
            
            <div className="text-center p-6 flex-1">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Passion</h3>
              <p className="text-neutral-600">
                Our team is driven by a genuine passion for design and a commitment to creating meaningful spaces.
              </p>
            </div>
            
            <div className="text-center p-6 flex-1">
              <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-light mb-4">Innovation</h3>
              <p className="text-neutral-600">
                We stay at the forefront of design trends and technology to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-serif font-light mb-8">Our Team</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-12">
            Our diverse team of architects, interior designers, and creative professionals brings together a wealth of experience and expertise to every project.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                <Image 
                  src="/placeholders/team1.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <h3 className="text-xl font-serif font-light mb-2">Alex Morgan</h3>
              <p className="text-accent-600 mb-4">Lead Architect</p>
              <p className="text-neutral-600 text-sm">
                With over 15 years of experience, Alex brings visionary design concepts to life with precision and elegance.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                <Image 
                  src="/placeholders/team2.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <h3 className="text-xl font-serif font-light mb-2">Jamie Chen</h3>
              <p className="text-accent-600 mb-4">Interior Design Director</p>
              <p className="text-neutral-600 text-sm">
                Jamie's keen eye for detail and innovative approach to spatial design creates environments that are both beautiful and functional.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                <Image 
                  src="/placeholders/team3.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </div>
              <h3 className="text-xl font-serif font-light mb-2">Taylor Williams</h3>
              <p className="text-accent-600 mb-4">Project Manager</p>
              <p className="text-neutral-600 text-sm">
                Taylor ensures seamless execution of every project, coordinating teams and timelines to deliver exceptional results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}