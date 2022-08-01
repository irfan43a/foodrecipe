/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    api_recipefood: "http://localhost:4000",
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
