import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Obliga a Next.js a transpilar correctamente estas librerías en el build
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    'framer-motion',
    'maath'
  ],
};

export default nextConfig;