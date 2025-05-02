import webpack from 'webpack';
const { IgnorePlugin } = webpack;

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
      })
    );
    return config;
  },
};

export default nextConfig; 