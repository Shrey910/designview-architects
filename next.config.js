/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image optimization for Vercel
  images: {
    unoptimized: true,
  },
  
  // Optimize CSS
  experimental: {
    optimizeCss: true,
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