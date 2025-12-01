/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization for Vercel
  images: {
    unoptimized: true,
  },
  
  // Optimize fonts
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;