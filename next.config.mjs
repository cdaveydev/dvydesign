/** @type {import('next').NextConfig} */
const nextConfig = {
  // Human-readable chunk names in dev only. Do not replace `config.optimization`
  // with a new object — that drops Webpack/Next internals and can trigger dev errors
  // like `TypeError: __webpack_modules__[moduleId] is not a function`.
  webpack: (config, { dev }) => {
    if (dev && config.optimization) {
      config.optimization.moduleIds = "named";
      config.optimization.chunkIds = "named";
    }
    return config;
  },
};

export default nextConfig;
