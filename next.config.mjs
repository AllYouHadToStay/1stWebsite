/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/1stWebsite',
  assetPrefix: '/1stWebsite/',
  images: {
    unoptimized: true, // Required for static export if you use next/image
  },
};

export default nextConfig;
