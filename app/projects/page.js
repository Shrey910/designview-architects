'use client';

import ProjectGrid from '../../components/ProjectGrid';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Dummy data for all projects
const allProjects = [
  {
    id: 8,
    title: 'Alexa',
    image: '/1b5bdf8a-39a0-42de-84dc-fc8523dd28b6.jpg',
    subcategory: 'Residential',
    area: 'Gota, Ahmedabad',
    gallery: [
      '/public/058c09ee-d572-48a1-b465-593c5c1b7cfa.jpg',
      '/1b5bdf8a-39a0-42de-84dc-fc8523dd28b6.jpg',
      '/1dec2fbe-6f4e-45fe-aa7a-27f626f0e906.jpg',
      '/350064a1-fd08-4bbc-93d1-8fce9778b142.jpg',
      '/c0805003-d7e7-4473-af14-31a7ed6e825a.jpg',
      '/c75769ef-2dd4-460d-9c4a-122b8ecebb28.jpg',
      '/e57cfeec-bffd-4ff2-9a3c-72084d52f146.jpg'
    ]
  },
  {
    id: 9,
    title: 'Meadows @ Adani Shantigram',
    image: '/1.png',
    subcategory: 'Residential',
    area: 'Adani Shantigram, Ahmedabad',
    gallery: [
      '/1.png',
      '/2.png',
      '/3.png',
      '/4.png',
      '/5.png'
    ]
  },
  // Interior Design - Residential - Swasthi Project
  {
    id: 11,
    title: 'Swasthi Residence',
    image: '/Swasthi/s-1.png',
    subcategory: 'Residential',
    area: 'Shilaj, Ahmedabad',
    gallery: [
      '/Swasthi/s-1.png',
      '/Swasthi/s-2.png',
      '/Swasthi/s-3.jpg',
      '/Swasthi/s-4.png'
    ]
  },
  // Interior Design - Residential - Palodia Bunglow Project
  {
    id: 12,
    title: 'Palodia Bunglow',
    image: '/p2.png',
    subcategory: 'Residential',
    area: 'Palodia, Ahmedabad',
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
  {
    id: 10,
    title: 'DELF Corporate Office',
    image: '/p_0005.jpg',
    subcategory: 'Commercial',
    area: 'Panjrapole, Ahmedabad',
    gallery: [
      'public/d-1.png',
      'public/d-2.png',
      'public/d-3.png',
      'public/d-4.png',
      'public/d-5.png',
      'public/d-6.jpg',
      'public/d-7.png'
    ]
  },
  // Interior Design - Commercial - Beauty Parlour Project
  {
    id: 13,
    title: 'Beauty Parlour',
    image: '/b-1.png',
    subcategory: 'Commercial',
    area: 'Sarghasan, Gandhinagar',
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
  {
    id: 14,
    title: 'Gym @ Sun Evoq',
    image: '/g-1.jpg',
    subcategory: 'Residential',
    area: 'Sindhubhavan Road, Ahmedabad',
    gallery: [
      '/g-1.jpg',
      '/g-2.png',
      '/g-3.png',
      '/g-4.png'
    ]
  },
  // Interior Design - Commercial - NKP Pharma Project
  {
    id: 15,
    title: 'NKP Pharma',
    image: '/n-1.jpg',
    subcategory: 'Commercial',
    area: 'Vatva, Ahmedabad',
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
];

// Other projects data for carousel (with completed years) - Only real projects
const otherProjects = [
  {
    id: 24,
    title: 'Samkeet-2 Apartment',
    client: 'Mr. Alpesh Mistry',
    type: 'Residential',
    location: 'Satellite, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 25,
    title: 'Panchtirth Apartment',
    client: 'Mr. Bipin Solanki',
    type: 'Residential Apartment',
    location: 'Satellite, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 26,
    title: 'Shardanagar Society',
    client: 'Mr. Nikunj Patel',
    type: 'Residential Bunglow',
    location: 'Paldi, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 27,
    title: 'Balaji Agora Residency',
    client: 'Mr. Dinesh Nicchani',
    type: 'Residential Apartment',
    location: 'Chandkheda, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 28,
    title: 'Maruti Celedron',
    client: 'Mr. Jigar Khambholja',
    type: 'Residential Apartment',
    location: 'Iskcon Circle, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 29,
    title: 'Shangrila Bunglows',
    client: 'Mr. Rajan Sushrut',
    type: 'Residential Bunglow',
    location: 'SBR, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 30,
    title: 'Virgo Designs',
    client: 'Mr. Jigar Khambholja',
    type: 'Commercial Showroom',
    location: 'Paldi, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  },
  {
    id: 31,
    title: 'Physics Academy - Amrapali Axiom',
    client: 'Mrs. Amrita Chakraborty',
    type: 'Commercial',
    location: 'Bopal, Ahmedabad',
    year: '2024',
    image: '/modern.jpg'
  }
];

// Get unique subcategories
const subcategories = ['All', ...new Set(allProjects.map(project => project.subcategory))];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function ProjectsContent() {
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const searchParams = useSearchParams();
  
  // Shuffle projects on component mount
  const shuffledProjects = useMemo(() => shuffleArray(otherProjects), []);
  
  // Check for category parameter in URL
  useEffect(() => {
    const subcategoryParam = searchParams.get('subcategory');
    
    if (subcategoryParam) {
      setSelectedSubcategory(subcategoryParam);
    } else {
      setSelectedSubcategory('All');
    }
  }, [searchParams]);

  const filteredProjects = allProjects.filter(project => {
        const subcategoryMatch = selectedSubcategory === 'All' || project.subcategory === selectedSubcategory;
        return subcategoryMatch;
      });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animate = () => {
      if (!isCarouselPaused) {
        positionRef.current -= 1;
        carousel.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isCarouselPaused]);

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-light mb-4">Our Projects</h1>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          Discover our portfolio of meticulously crafted projects that reflect our commitment to timeless elegance and functional beauty.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory}
            onClick={() => setSelectedSubcategory(subcategory)}
            className={`px-6 py-2 text-sm font-sans uppercase tracking-wider transition-all ${
              selectedSubcategory === subcategory
                ? 'bg-accent-600 text-white'
                : 'border border-neutral-300 hover:bg-accent-100 hover:border-accent-300'
            }`}
          >
            {subcategory}
          </button>
        ))}
      </div>

      <ProjectGrid projects={filteredProjects} />

      {/* Other Projects Carousel */}
      <section className="mt-20 pt-10 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">Other Projects</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Discover more of our exceptional architectural and interior design projects.
            </p>
          </motion.div>

          <div className="relative overflow-hidden py-4">
            <div 
              ref={carouselRef}
              className="flex gap-6 whitespace-nowrap"
              style={{ width: 'max-content' }}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
            >
              {/* Render cards in a loop */}
              {Array.from({ length: 50 }).map((_, index) => {
                const project = shuffledProjects[index % shuffledProjects.length];
                const actualIndex = index % shuffledProjects.length;
                
                return (
                  <motion.div
                    key={`${project.id}-${index}`}
                    whileHover={{ y: -5 }}
                    className="flex-shrink-0 w-96 bg-white rounded-lg overflow-hidden shadow-md border-l-4 border-[#CA6B32]"
                  >
                    <div className="block p-6">
                      <h3 className="text-xl font-serif font-light mb-3 text-[#303F57] truncate">{project.title}</h3>
                      <div className="space-y-2">
                        <p className="text-neutral-600 text-sm flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                          <span className="font-medium mr-1">Client:</span> 
                          <span className="truncate">{project.client}</span>
                        </p>
                        <p className="text-neutral-600 text-sm flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <span className="font-medium mr-1">Type:</span> 
                          <span className="truncate">{project.type}</span>
                        </p>
                        <p className="text-neutral-600 text-sm flex items-start">
                          <svg className="w-4 h-4 mr-2 mt-0.5 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span className="font-medium mr-1">Location:</span> 
                          <span className="truncate">{project.location}</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

export default ProjectsPage;