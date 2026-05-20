import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/download-book/[token]": ["./data/downloads/**"],
  },
};

export default nextConfig;
