// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione esta seção de 'images'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**',
      },
    ],
  },
};

export default nextConfig;