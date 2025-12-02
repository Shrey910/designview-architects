'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Dummy data for project details
const projectData = {
  8: {
    id: 8,
    title: 'Alexa',
    area: 'Gota, Ahmedabad',
    subcategory: 'Residential',
    description: 'A stunning modern residence that combines elegance with functionality. This comprehensive interior design project showcases our approach to creating cohesive, livable spaces that reflect the client\'s personal style while maximizing the potential of the architecture.',
    heroImage: '/1b5bdf8a-39a0-42de-84dc-fc8523dd28b6.jpg',
    gallery: [
      '/058c09ee-d572-48a1-b465-593c5c1b7cfa.jpg',
      '/1b5bdf8a-39a0-42de-84dc-fc8523dd28b6.jpg',
      '/1dec2fbe-6f4e-45fe-aa7a-27f626f0e906.jpg',
      '/350064a1-fd08-4bbc-93d1-8fce9778b142.jpg',
      '/c0805003-d7e7-4473-af14-31a7ed6e825a.jpg',
      '/c75769ef-2dd4-460d-9c4a-122b8ecebb28.jpg',
      '/e57cfeec-bffd-4ff2-9a3c-72084d52f146.jpg'
    ]
  },
  9: {
    id: 9,
    title: 'Meadows @ Adani Shantigram',
    area: 'Adani Shantigram',
    subcategory: 'Residential',
    description: 'An exquisite residential project located in one of Ahmedabad\'s most prestigious developments. This design balances luxury with comfort, creating a sanctuary that reflects the refined tastes of its inhabitants. The thoughtful integration of indoor and outdoor spaces maximizes the natural beauty of the surroundings while providing all modern amenities.',
    heroImage: '/1.png',
    gallery: [
      '/1.png',
      '/2.png',
      '/3.png',
      '/4.png',
      '/5.png'
    ]
  },
  // Interior Design - Residential - Swasthi Project
  11: {
    id: 11,
    title: 'Swasthi Residence',
    area: 'Shilaj, Ahmedabad',
    subcategory: 'Residential',
    description: 'A beautiful residential interior design project showcasing our expertise in creating elegant and functional living spaces. This project demonstrates our commitment to combining aesthetic appeal with practical functionality.',
    heroImage: '/Swasthi/s-1.png',
    gallery: [
      '/Swasthi/s-1.png',
      '/Swasthi/s-2.png',
      '/Swasthi/s-3.jpg',
      '/Swasthi/s-4.png'
    ]
  },
  // Interior Design - Residential - Palodia Bunglow Project
  12: {
    id: 12,
    title: 'Palodia Bunglow',
    area: 'Palodia, Ahmedabad',
    subcategory: 'Residential',
    description: 'An elegant residential interior design project showcasing our expertise in creating luxurious living spaces. This bunglow project demonstrates our commitment to combining functionality with aesthetic appeal to create a harmonious living environment.',
    heroImage: '/p2.png',
    gallery: [
      '/p1.png',
      '/p2.png',
      '/p4.png',
      '/p5.png',
      '/p6.png',
      '/p8.png'
    ]
  },
  // Interior Design - Commercial - DELF Project
  10: {
    id: 10,
    title: 'DELF Corporate Office',
    area: 'Panjrapole, Ahmedabad',
    subcategory: 'Commercial',
    description: 'A sophisticated corporate office design that fosters productivity and collaboration. The space combines modern aesthetics with functional efficiency, featuring open work areas, private meeting rooms, and休闲 zones. The design emphasizes natural light, ergonomic furniture, and a cohesive color palette that promotes a professional yet comfortable work environment.',
    heroImage: '/p_0005.jpg',
    gallery: [
      '/d-1.png',
      '/d-2.png',
      '/d-3.png',
      '/d-4.png',
      '/d-5.png',
      '/d-6.jpg',
      '/d-7.png'
    ]
  },
  // Interior Design - Commercial - Beauty Parlour Project
  13: {
    id: 13,
    title: 'Beauty Parlour',
    area: 'Sarghasan, Gandhinagar',
    subcategory: 'Commercial',
    description: 'This modern beauty parlour design creates a serene and luxurious environment that enhances the client experience. The space combines contemporary aesthetics with functional efficiency, featuring clean lines, soft lighting, and a harmonious color palette that promotes relaxation and well-being. Thoughtful zoning separates treatment areas from consultation spaces, ensuring privacy while maintaining an open, inviting atmosphere. Premium materials and finishes reflect the high-quality services offered, while ergonomic furniture and specialized equipment support both client comfort and staff efficiency. The design incorporates natural elements and ambient lighting to create a spa-like ambiance that helps clients unwind and feel pampered throughout their visit.',
    heroImage: '/b-1.png',
    gallery: [
      '/b-1.png',
      '/b-2.png',
      '/b-3.png',
      '/b-4.png',
      '/b-5.png',
      '/b-6.png'
    ]
  },
  // Interior Design - Commercial - Gym Project
  14: {
    id: 14,
    title: 'Gym @ Sun Evoq',
    area: 'Sindhubhavan Road, Ahmedabad',
    subcategory: 'Commercial',
    description: 'A state-of-the-art fitness facility designed to inspire and motivate. This gym features a modern, energizing environment with specialized zones for different workout activities. The design combines functionality with aesthetic appeal, incorporating durable materials, strategic lighting, and vibrant accents to create an atmosphere that encourages physical activity and wellness. The space is thoughtfully organized to optimize workflow and ensure a safe, comfortable experience for all users.',
    heroImage: '/g-1.jpg',
    gallery: [
      '/g-1.jpg',
      '/g-2.png',
      '/g-3.png',
      '/g-4.png'
    ]
  },
  // Interior Design - Commercial - NKP Pharma Project
  15: {
    id: 15,
    title: 'NKP Pharma',
    area: 'Vatva, Ahmedabad',
    subcategory: 'Commercial',
    description: 'A modern pharmaceutical facility designed to meet the highest standards of functionality and aesthetics. This project showcases our expertise in creating professional environments that blend efficiency with visual appeal. The design emphasizes clean lines, optimal workflow, and a harmonious color scheme that promotes a sense of trust and reliability. Thoughtful space planning ensures seamless operations while maintaining a welcoming atmosphere for clients and staff alike.',
    heroImage: '/n-1.jpg',
    gallery: [
      '/n-1.jpg',
      '/n-2.jpg',
      '/n-3.png',
      '/n-4.png',
      '/n-5.png',
      '/n-6.png',
      '/n-7.png',
      '/n-8.png'
    ]
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState(null); // start with no project
  
  useEffect(() => {
    if (params?.slug) {
      const projectId = parseInt(params.slug);
      setProject(projectData[projectId] || null);
    }
  }, [params]);
  
  // If no project is found, redirect to projects page
  if (project === null) {
    // Don't redirect immediately, wait for params to load
    if (params?.slug && projectData[parseInt(params.slug)] === undefined) {
      if (typeof window !== 'undefined') {
        window.location.href = '/projects';
      }
      return null;
    }
    // If still loading, show nothing
    if (params?.slug === undefined) {
      return null;
    }
    // Still loading the project
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <Image 
            src={project.heroImage} 
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 h-full flex items-end pb-12 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-5xl mx-auto w-full"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-2">{project.title}</h1>
            <div className="flex items-center gap-4">
              {project.area && (
                <p className="text-white text-lg">{project.area}</p>
              )}
              {project.subcategory && (
                <span className="text-xs font-sans uppercase tracking-wider text-white bg-black bg-opacity-30 px-2 py-1 rounded">
                  {project.subcategory}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Details */}
      <div className="py-16 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-lg text-neutral-600 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((image, index) => {
            // Check if this is the last image and there's an odd number of images
            const isLastAndOdd = index === project.gallery.length - 1 && project.gallery.length % 2 === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className={`overflow-hidden rounded-lg ${isLastAndOdd ? 'md:col-start-1 md:col-end-3 md:justify-self-center md:w-1/2' : ''}`}
              >
                <div className="relative w-full h-80">
                  <Image 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}