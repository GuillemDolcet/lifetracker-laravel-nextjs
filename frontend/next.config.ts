import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl(nextConfig);

export default nextConfig;
