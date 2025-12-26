import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/junk-mail-opt-out-guide",
        destination: "/reduce-junk-mail",
        permanent: true,
      },
      {
        source: "/junk-mail-opt-out-guide/",
        destination: "/reduce-junk-mail",
        permanent: true,
      },
      {
        source: "/is-junk-mail-legal",
        destination: "/legal-background",
        permanent: true,
      },
      {
        source: "/is-junk-mail-legal/",
        destination: "/legal-background",
        permanent: true,
      },
      {
        source: "/every-door-direct-mail-eddm",
        destination: "/what-is-eddm",
        permanent: true,
      },
      {
        source: "/every-door-direct-mail-eddm/",
        destination: "/what-is-eddm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
