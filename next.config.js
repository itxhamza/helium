/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
};

module.exports = nextConfig;
