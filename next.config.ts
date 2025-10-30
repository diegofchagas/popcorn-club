import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
        port: '',
        pathname: '/**', 
      },
            {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};
export default nextConfig;
