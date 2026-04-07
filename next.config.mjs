/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid stale webpack chunk maps in dev (e.g. missing ./948.js) when .next gets out of sync.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
