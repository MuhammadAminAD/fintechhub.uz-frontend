// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Rasmlar serverining protokoli
        protocol: 'http', 
        // Rasmlar serverining IP manzili
        hostname: '192.168.1.52', 
        // Rasmlar serverining porti
        port: '8000', 
        // Rasmlar joylashgan yo'l (ixtiyoriy, lekin tavsiya etiladi)
        pathname: '/media/**', 
      },
    ],
  },
}

module.exports = nextConfig