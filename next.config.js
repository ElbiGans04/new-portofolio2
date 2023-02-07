/** @type {import('next').NextConfig} */

const pecah = process.env.STRAPI_BASE_URL.split(":")
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.STRAPI_BASE_URL],
    remotePatterns: [
      {
        protocol: pecah[0],
        hostname: pecah[1].slice(2),
        port: pecah[2],
      },
    ],
  },
}

module.exports = nextConfig
