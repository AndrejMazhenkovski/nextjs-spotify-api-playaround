/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      'i.imgur.com',
      'i.scdn.co',
      'dailymix-images.scdn.co',
      'mosaic.scdn.co',
    ],
  },
};
