/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'uyy0kjad2n.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'zbm5woa3iy.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'vhqd75bvbs.ufs.sh',
      },
    ],
  },
  reactStrictMode: false,
  poweredByHeader: false,
  trailingSlash: false,
  distDir: 'out',
  webpack: (config, { dev, isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};

module.exports = nextConfig;