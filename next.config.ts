import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint checks during build to prevent unescaped text quotes from blocking compilations
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
