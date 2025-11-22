// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Silences any prior webpack/Turbopack warnings if present
  turbopack: {
    // Add audio extensions so Turbopack recognizes them as importable assets
    resolveExtensions: [
      '.mp3',
      '.wav',
      '.ogg',
      '.m4a', // Add more as needed (e.g., for your wedding card sounds)
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
    ],
  },
};

export default nextConfig;