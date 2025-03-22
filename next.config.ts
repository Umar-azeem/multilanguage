import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'ur'],  
    defaultLocale: 'en',
  },
};


export default nextConfig;
