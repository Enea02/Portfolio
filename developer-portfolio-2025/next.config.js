/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // Add your image hosting domains here (e.g., 'your-cdn.com', 'images.unsplash.com')
  },
  // Experimental features
  experimental: {
    // Add experimental features if needed
  },
}

module.exports = nextConfig
