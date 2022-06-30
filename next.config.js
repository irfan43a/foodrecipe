/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    api_recipefood: "http://localhost:4000/v1/",
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
