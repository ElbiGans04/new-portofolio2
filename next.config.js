/** @type {import('next').NextConfig} */
const path = require("path");
const pecah = process.env.STRAPI_BASE_URL.split(":");
const nextConfig = {
  output: process.env.NEXT_PUBLIC_EXPORT_MODE == "false" ? "export" : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NEXT_PUBLIC_EXPORT_MODE == "false" ? true : false,
    remotePatterns: [
      {
        protocol: pecah[0],
        hostname: pecah[1].slice(2),
        port: pecah[2] || "",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
  },
};

module.exports = nextConfig;
