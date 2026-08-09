'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Dummy data for project details
const projectData = {
  // New Santoor Farm project
  16: {
    id: 16,
    title: 'Santoor Farm',
    area: 'Rancharda',
    subcategory: 'Residential',
    description: 'Santoor Farm is a remarkable residential project that beautifully integrates architecture with landscape design. The property features expansive gardens with carefully curated plant selections that complement the modern architecture. Our landscape design approach emphasizes native flora, sustainable irrigation systems, and outdoor living spaces that seamlessly connect with the interior. The project includes manicured lawns, decorative pathways, water features, and strategically placed trees that provide both aesthetic appeal and natural shade. The landscaping design creates private outdoor retreats while maintaining visual continuity with the surrounding environment, resulting in a harmonious blend of built and natural elements.',
    heroImage: '/ff1.png',
    gallery: [
      '/ff1.png',
      '/ff2.png',
      '/ff3.png',
      '/ff4.png'
    ]
  },
  // New Shashwat Bunglows project
  17: {
    id: 17,
    title: 'Shashwat Bunglows',
    area: 'Ahmedabad',
    subcategory: 'Residential',
    description: 'Shashwat Bunglows represents our commitment to creating elegant residential spaces that blend modern design with traditional comfort. This project showcases our expertise in crafting luxurious living environments that prioritize both aesthetics and functionality. Each bungalow in this development features carefully planned layouts, premium materials, and thoughtful design elements that enhance the quality of life for residents. The project emphasizes natural light, ventilation, and seamless indoor-outdoor connectivity, creating homes that are both beautiful and livable.',
    heroImage: '/s-1.jpg',
    gallery: [
      '/s-1.jpg',
      '/s-3.jpg',
      '/s-4.jpg',
      '/s-8.jpg',
      '/s-5.jpg',
      '/s-6.jpg',
      '/s-7.jpg'
    ]
  },
  // New Venus Atlantis project
  18: {
    id: 18,
    title: 'Venus Atlantis',
    area: 'Prahladnagar, Ahmedabad',
    subcategory: 'Commercial',
    description: 'Venus Atlantis is a sophisticated commercial project that exemplifies our approach to creating inspiring work environments. This project combines contemporary design with functional excellence to deliver a space that fosters productivity and creativity. The design features modern aesthetics with carefully selected materials that create a professional yet welcoming atmosphere. Thoughtful planning ensures optimal workflow and spatial efficiency while maintaining the highest standards of comfort and style. The result is a commercial space that reflects the progressive vision of its occupants while providing a premium environment for business operations.',
    heroImage: '/vs-1.png',
    gallery: [
      '/vs-1.png',
      '/vs-2.png',
      '/vs-3.png',
      '/vs-4.png',
      '/vs-5.png'
    ]
  },
  8: {
    id: 8,
    title: 'Alexa',
    area: 'Gota, Ahmedabad',
    subcategory: 'Residential',
    description: 'A stunning modern residence that combines elegance with functionality. This comprehensive interior design project showcases our approach to creating cohesive, livable spaces that reflect the client\'s personal style while maximizing the potential of the architecture.',
    heroImage: '/al-1.jpg',
    gallery: [
      '/al-1.jpg',
      '/al-2.jpg',
      '/al-3.jpg',
      '/al-4.jpg',
      '/al-5.jpg',
      '/al-6.jpg',
      '/al-7.jpg'
    ]
  },
  9: {
    id: 9,
    title: 'Meadows @ Adani Shantigram',
    area: 'Adani Shantigram',
    subcategory: 'Residential',
    description: 'An elegant interior design project that showcases our expertise in creating luxurious living spaces. This project demonstrates our commitment to combining functionality with aesthetic appeal to create a harmonious living environment.',
    heroImage: '/1.png',
    gallery: [
      '/1.png',
      '/2.png',
      '/3.png',
      '/4.png',
      '/5.png'
    ]
  },
  22: {
    id: 22,
    title: 'Hindva Skylife',
    area: 'Naroda, Ahmedabad',
    subcategory: 'Residential',
    description: 'A stunning modern residence that combines elegance with functionality. This comprehensive interior design project showcases our approach to creating cohesive, livable spaces that reflect the client\'s personal style while maximizing the potential of the architecture.',
    heroImage: '/h-1.JPG',
    gallery: [
      '/h-1.JPG',
      '/h-2.png',
      '/h-3.png',
      '/h-4.png',
      '/h-5.png',
      '/h-6.png',
      '/h-7.png'
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
    description: 'Located in Ahmedabad, the DELF Corporate Office is crafted as a modern, efficient workspace that reflects the firm\'s global engineering identity. The design blends clarity with functionality, pairing clean lines and a muted palette with subtle green accents to create a calm yet energizing environment. The journey begins at a serene entrance foyer anchored by a traditional Ganesh idol, setting a welcoming tone before transitioning into a linear, well-organized office layout. Extensive use of glass enhances openness, drawing natural light deeper into the space and creating seamless visual connectivity across circulation pathways and work zones. Workstations are thoughtfully arranged to support both collaboration and focused tasks, complemented by ergonomic furniture and well-considered lighting. Enclosed cabins, discussion areas, and technical stations are integrated with attention to workflow, acoustics, and storage. Low-maintenance materials, soft illumination, and reflective flooring contribute to an easy-to-navigate, energy-efficient workspace. Every corner—from the reception to the main hall—balances professionalism with warmth, embodying DELF\'s commitment to precision, transparency, and refined design. The result is a sophisticated and functional office that aligns perfectly with the firm\'s values and operational philosophy.',
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
  },
  // Retail Projects - Anil Sarees
  19: {
    id: 19,
    title: 'Anil Sarees',
    area: 'Naroda',
    subcategory: 'Retail',
    description: 'Anil Sarees is a premium retail showroom design that showcases our expertise in creating elegant commercial spaces. This project demonstrates our ability to blend functionality with sophisticated aesthetics to create an inviting shopping environment that enhances the customer experience. The space is designed to highlight products effectively while providing customers with a comfortable and engaging shopping experience.',
    heroImage: '/retail/swr-1.jpg',
    gallery: [
      '/retail/swr-1.jpg',
      '/retail/swr-2.jpg',
      '/retail/swr-3.jpg',
      '/retail/swr-4.jpg'
    ]
  },
  // Retail Projects - Virgo Designs
  20: {
    id: 20,
    title: 'Virgo Designs',
    area: 'Paldi, Ahmedabad',
    subcategory: 'Retail',
    description: 'Virgo Designs is a sophisticated retail showroom that exemplifies our approach to commercial interior architecture. The project features a harmonious blend of modern design elements and practical considerations, creating a space that both attracts customers and supports business operations effectively. This showroom design emphasizes clean lines, strategic lighting, and thoughtful space planning to create an optimal shopping experience.',
    heroImage: '/sr-1.jpg',
    gallery: [
      '/sr-1.jpg',
      '/sr-2.jpg',
      '/sr-3.jpg',
      '/sr-4.png'
    ]
  },
  // Retail Projects - Mobile Shop
  21: {
    id: 21,
    title: 'Mobile Shop',
    area: 'Paldi, Ahmedabad',
    subcategory: 'Retail',
    description: 'Mobile Shop is a modern retail design that showcases our expertise in creating functional and attractive commercial spaces. This project demonstrates our ability to blend contemporary aesthetics with practical retail solutions, creating an environment that enhances both customer experience and business operations. The space is designed with clean lines, strategic product display areas, and efficient workflow planning.',
    heroImage: '/ms-1.png',
    gallery: [
      '/ms-1.png',
      '/ms-2.png',
      '/ms-3.png'
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
        <motion.img 
          src={project.heroImage} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
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
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}