/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for static hosting
  output: 'export',
  
  // Configure image optimization
  images: {
    unoptimized: true, // Required for static exports
  },
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // Optimize fonts
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;