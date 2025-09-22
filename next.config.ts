import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/investors/:path*',
        destination: '/investors/:path*',
      },
    ];
  },
  
  // Optional: Enable subdomain simulation in development
  async headers() {
    return [
      {
        source: '/investors/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
