'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  '/hero_image.jpg',
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
];

const projects = [
  {
    id: 8,
    name: 'Alexa',
    type: 'RESIDENCE',
    location: 'GOTA, AHMEDABAD',
    year: '2025',
    image: '/al-1.jpg',
  },
  {
    id: 10,
    name: 'DELF Corporate Office',
    type: 'COMMERCIAL',
    location: 'PANJRAPOLE, AHMEDABAD',
    year: '2017',
    image: '/p_0005.jpg',
  },
  {
    id: 14,
    name: 'DEVIKA SILK PALACE',
    type: 'RETAIL',
    location: 'NARANPURA, AHMEDABAD',
    year: '2026',
    image: '/ss-4.png',
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (previous) =>
          (previous + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero-section">

        {/* Hero Images */}
        <div className="hero-images">
          {heroImages.map((image, index) => (
            <motion.div
              key={image}
              className="hero-image"
              initial={{ opacity: 0 }}
              animate={{
                opacity:
                  index === currentImageIndex ? 1 : 0,
                scale:
                  index === currentImageIndex ? 1 : 1.04,
              }}
              transition={{
                opacity: { duration: 1.5 },
                scale: { duration: 6 },
              }}
            >
              <Image
                src={image}
                alt="Designview Architects project"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Image overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Spaces shaped for
            <br />
            the way you live.
          </motion.h1>

          <div className="hero-bottom">

            <p>
              RESIDENTIAL&nbsp;&nbsp;·&nbsp;&nbsp;
              COMMERCIAL&nbsp;&nbsp;·&nbsp;&nbsp;
              RETAIL&nbsp;&nbsp;·&nbsp;&nbsp;
              LANDSCAPE
            </p>
 
            <a href="#approach">
              SCROLL TO EXPLORE ↓
            </a>

          </div>
        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section
        id="approach"
        className="approach-section"
      >
        <div className="section-label">
          OUR APPROACH
        </div>

        <div className="approach-content">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We create considered
            spaces that balance
            material, light and function.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            At Designview Architects, we believe that
            meaningful design goes beyond aesthetics.
            We shape spaces around the people who
            inhabit them — bringing together clarity,
            warmth and attention to detail.
          </motion.p>

        </div>
      </section>


      {/* =====================================================
          SELECTED WORK
      ===================================================== */}

      <section className="projects-section">

        <div className="projects-header">

          <div>
            <h2>
              Built with intention.
            </h2>
          </div>

          <Link
            href="/projects"
            className="view-all-link"
          >
            VIEW ALL PROJECTS →
          </Link>

        </div>


        <div className="projects-grid projects-grid-asymmetric">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-item project-${index + 1}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
            >

              <Link
                href={`/projects/${project.id}`}
                className="project-link"
              >

                <div className="project-image">

                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />


                </div>

                <div className="project-meta">

                  <div>
                    <p className="project-type">
                      {project.type}
                    </p>

                    <h3>
                      {project.name}
                    </h3>
                  </div>

                  <p className="project-location">
                    {project.location}
                    <br />
                    {project.year}
                  </p>

                </div>

              </Link>

            </motion.article>
          ))}

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="services-section">

        <div className="section-label">
          WHAT WE DO
        </div>

        <div className="services-intro">
          <h2>
            From the first sketch
            <br />
            to the final detail.
          </h2>

          <p>
            Every project is approached as a complete
            design experience — from architecture and
            interiors to execution and the details that
            make a space feel its own.
          </p>
        </div>


        <div className="services-list">

          <div className="service-row">
            <span>01</span>
            <h3>Architecture</h3>
          </div>

          <div className="service-row">
            <span>02</span>
            <h3>Interior Design</h3>
          </div>

          <div className="service-row">
            <span>03</span>
            <h3>Landscape Design</h3>
          </div>

          <div className="service-row">
            <span>04</span>
            <h3>Turnkey Projects</h3>
          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}

      <section className="contact-cta">

        <div>

          <p className="section-label">
            HAVE A PROJECT IN MIND?
          </p>

          <h2>
            Let's bring your vision
            <br />
            to life.
          </h2>

        </div>

        <Link
          href="/contact"
          className="cta-link"
        >
          START A PROJECT →
        </Link>

      </section>

    </div>
  );
}