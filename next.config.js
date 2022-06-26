/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RECIPE_FOOD_API_URL: "http://localhost:4000/v1/",
  },
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};
