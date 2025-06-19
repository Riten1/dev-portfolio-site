/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  webpack: (config: any) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  output: "export",
  basePath: isProd && isGitHubPages ? "/dev-portfolio-site" : "",
  assetPrefix: isProd && isGitHubPages ? "/dev-portfolio-site" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
