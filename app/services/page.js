'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Our Services</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto text-justify">
            We offer comprehensive design solutions tailored to your unique needs and aspirations. 
            Our expert team combines creativity with functionality to transform spaces into inspiring environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:grid-flow-col-dense'} gap-12 items-center`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h2 className="text-3xl font-serif font-light mb-4">{service.title}</h2>
                <p className="text-neutral-600 mb-6 leading-relaxed text-justify">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-accent-600 mr-2">✓</span>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className={`overflow-hidden rounded-lg self-start ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover max-h-80 object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center py-16 border-t border-neutral-200"
        >
          <h2 className="text-3xl font-serif font-light mb-6">Ready to Transform Your Space?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto text-justify">
            Let's discuss your project and create a space that truly reflects your vision and lifestyle.
          </p>
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-[#CA6B32] text-white border border-[#CA6B32] px-8 py-3 font-sans text-sm uppercase tracking-wider hover:bg-white hover:text-[#CA6B32] transition-all"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}