module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://img.youtube.com/',
    domains: ["img.youtube.com"],
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
