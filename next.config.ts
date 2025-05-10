import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    domains: ["http://127.0.0.1:8000/"],
  },
};

export default nextConfig;
