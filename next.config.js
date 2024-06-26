/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  optimizeFonts: false,
  images: {
    domains: [
      "test-kart-v1-public.s3.ap-south-1.amazonaws.com",
      "localhost",
      "testkart.in",
      "dh2vqdcou0l91.cloudfront.net",
      "travvir-cyberoze.s3.amazonaws.com",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    RZPAY_TEST_KEY: process.env.RZPAY_TEST_KEY,
    RZPAY_LIVE_KEY: process.env.RZPAY_LIVE_KEY,
  },
};

module.exports = nextConfig;
