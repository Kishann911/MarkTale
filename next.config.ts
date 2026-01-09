import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.marktaleworld.com',
      },
      {
        protocol: 'https',
        hostname: 'marktaleworld.com',
      }
    ],
  },
};

export default nextConfig;
