import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "framer-motion",
    "maath"
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'three', '@react-three/fiber', '@react-three/drei'];
    }
    return config;
  }
};

export default nextConfig;