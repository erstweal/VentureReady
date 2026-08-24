import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Retired 1 Million Cups (Ann Arbor) event landing page.
        // Kept as a permanent redirect so QR codes and saved links from the
        // event land on the homepage instead of a 404.
        source: "/1mc",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
