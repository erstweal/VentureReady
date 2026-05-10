import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://ventureready.hashnode.dev/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://ventureready.hashnode.dev/blog/:path*",
      },
    ];
  },
};

export default nextConfig;