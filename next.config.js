module.exports = {
  reactStrictMode: true,
  images: {
    // loader: 'imgix',
    // path: '.',
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
