'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Interior Design',
      description: 'Comprehensive interior design services for residential and commercial spaces. Our expert designers work closely with clients to create functional, aesthetically pleasing environments that reflect their unique style and needs.',
      features: [
        'Space Planning & Layout',
        'Color Consultation',
        'Furniture Selection',
        'Lighting Design',
        'Custom Millwork',
        'Material Selection'
      ],
      image: '/interior.jpg'
    },
    {
      id: 2,
      title: 'Architecture',
      description: 'Innovative architectural solutions that blend functionality with aesthetic excellence. We transform spaces into timeless structures that enhance the way you live and work.',
      features: [
        'Conceptual Design',
        '3D Visualization',
        'Construction Documentation',
        'Permit Drawings',
        'Project Management',
        'Site Supervision'
      ],
      image: '/bunglow.jpg'
    },
    {
      id: 3,
      title: 'Landscaping',
      description: 'Thoughtful outdoor design solutions that seamlessly blend natural elements with architectural features. Our landscaping services create harmonious outdoor environments that enhance your property\'s beauty and functionality.',
      features: [
        'Garden Design',
        'Hardscaping',
        'Plant Selection',
        'Irrigation Systems',
        'Outdoor Living Spaces',
        'Sustainable Landscaping'
      ],
      image: '/landscape.jpg'
    },
    {
      id: 4,
      title: 'Consultation',
      description: 'Expert guidance for your design projects. Whether you\'re starting from scratch or looking to refresh your existing space, our consultations provide valuable insights and direction.',
      features: [
        'Design Strategy',
        'Budget Planning',
        'Vendor Recommendations',
        'Timeline Development',
        'Style Guidance',
        'Problem Solving'
      ],
      image: '/modern.jpg'
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Our Services</h1>
          <div className="w-24 h-px bg-accent-600 mx-auto mb-8"></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We offer a comprehensive range of design services tailored to meet your unique vision and requirements.
          </p>
        </motion.div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-light mb-6">{service.title}</h2>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 w-full">
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-serif font-light mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your space? Get in touch with us to discuss your project and discover how our expertise can bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-accent-600 text-white px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-black transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}