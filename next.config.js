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
  async redirects() {
    return [
      {
        source: '/sold-archive/gallery',
        destination: '/sold-archive',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
