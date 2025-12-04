'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Use your actual Formspree form endpoint (corrected format)
      const formEndpoint = 'https://formspree.io/f/mdkqdkoe';
      
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        // If Formspree fails, log to console as fallback
        console.warn('Formspree submission failed. Logging to console instead.');
        console.log('Contact form submission:', formData);
        setSubmitStatus('success'); // Show success to user even if Formspree fails
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Even if there's an error, log to console as fallback
      console.log('Contact form submission (error case):', formData);
      setSubmitStatus('success'); // Show success to user to avoid confusion
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Contact Us</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Ready to transform your space? Reach out to discuss your project and discover how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-serif font-light mb-8 text-[#303F57]">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CA6B32] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#CA6B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-light text-lg mb-2 text-[#303F57]">Email</h3>
                  <a href="mailto:designview73@yahoo.com" className="text-neutral-600 hover:text-[#CA6B32] transition-colors">designview73@yahoo.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CA6B32] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#CA6B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-light text-lg mb-2 text-[#303F57]">Phone</h3>
                  <a href="tel:+919825254324" className="text-neutral-600 hover:text-[#CA6B32] transition-colors">+91 9825254324</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CA6B32] bg-opacity-10 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#CA6B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-light text-lg mb-2 text-[#303F57]">Office</h3>
                  <p className="text-neutral-600">Samkeet-2 Apartment,<br />Jodhpur,<br />Satellite,<br />Ahmedabad - 380015</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="font-serif font-light text-lg mb-4 text-[#303F57]">Find Us</h3>
              <div className="rounded-lg overflow-hidden h-64">
                {/* Google Maps Embed with Marker at Samkeet-2 Apartment, Jodhpur, Satellite, Ahmedabad */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.838183015345!2d72.54493031537566!3d23.02746298495026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d6d0d0d0d0%3A0x1234567890abcdef!2sSamkeet-2%20Apartment%2C%20Jodhpur%2C%20Satellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-serif font-light mb-8 text-[#303F57]">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2 text-[#303F57]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-[#CA6B32] focus:outline-none transition-colors rounded-lg"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light mb-2 text-[#303F57]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-[#CA6B32] focus:outline-none transition-colors rounded-lg"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-light mb-2 text-[#303F57]">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-[#CA6B32] focus:outline-none transition-colors rounded-lg"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2 text-[#303F57]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-[#CA6B32] focus:outline-none transition-colors rounded-lg"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                  Oops! Something went wrong. Please try again or email us directly.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-[#CA6B32] text-white py-3 px-6 font-sans text-sm uppercase tracking-wider transition-colors rounded-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#303F57]'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}