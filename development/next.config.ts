/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any, { isServer }: any) => {
    // Handle PDF.js worker
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
      encoding: false,
    };

    // Handle PDF.js in client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        encoding: false,
      };
    }

    return config;
  },
  // Experimental features for better chunk loading
  experimental: {
    optimizePackageImports: ["react-pdf"],
  },
};

module.exports = nextConfig;
