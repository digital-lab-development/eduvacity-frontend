module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['eduvacity-bucket.sfo3.digitaloceanspaces.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  output: 'standalone',
};
