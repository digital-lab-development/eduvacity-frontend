module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  output: 'standalone',
}
