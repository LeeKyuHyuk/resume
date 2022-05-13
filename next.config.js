/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/resume",
  images: {
    loader: "imgix",
    path: "https://kyuhyuk.kr/resume/",
  },
};

module.exports = nextConfig;
