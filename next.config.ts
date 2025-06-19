/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  webpack: (config: any) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  output: "export",
  basePath: isProd ? "/dev-portfolio-site" : "",
  assetPrefix: isProd ? "/dev-portfolio-site" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
