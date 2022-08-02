/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    api_recipefood: "https://recipefood-app.herokuapp.com",
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
