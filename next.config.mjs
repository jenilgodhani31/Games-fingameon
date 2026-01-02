/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'], 
  },

  swcMinify: true,

  compiler: {
    removeConsole: { production: true },
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/games',
        permanent: true,
      },
    ];
  },

  // 🟢 Long-term caching enabled (fixes "Use efficient cache lifetimes")
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|ico|js|css|woff|woff2|json)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      }
    ];
  },

  turbopack: {},
};

export default nextConfig;
