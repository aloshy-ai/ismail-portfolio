import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ismail-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ismail-portfolio' : '',
};

export default nextConfig;
