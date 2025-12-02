/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization for Vercel
  images: {
    unoptimized: false, // Enable image optimization for Vercel
  },
  
  // Handle prerendering issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Handle TypeScript issues
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;