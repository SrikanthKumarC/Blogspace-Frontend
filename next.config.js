/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'images.pexels.com','i.pinimg.com', 'lh3.googleusercontent.com' , 'www.kindpng.com'],
  },
}

module.exports = nextConfig
