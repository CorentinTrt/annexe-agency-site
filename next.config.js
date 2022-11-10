/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  sassOptions: {
    additionalData: `@use "styles/utils/mixins.scss" as M; @use "styles/utils/typography.scss" as T; @use "styles/utils/variables.scss" as V;`,
    excliudePaths: "/styles",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  swcMinify: true,
};

module.exports = nextConfig;
