/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'jp'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auc-pctr.c.yimg.jp',
      },
    ],
  },
  env: {
    API_BASE_URL: process.env.BASE_URL,
  }
}

module.exports = nextConfig
