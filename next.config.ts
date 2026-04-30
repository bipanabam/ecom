import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dkfc6fw0j/**",
      },
    ]
  },
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
