/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for development mode
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  reactStrictMode: false,
  poweredByHeader: false,
  trailingSlash: true,
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching in development to prevent caching errors
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;