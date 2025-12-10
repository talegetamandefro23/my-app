import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  rules: {
    "react/no-unescaped-entities": "off",
  },
};

export default nextConfig;
