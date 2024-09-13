//next.config.mjs
/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          { hostname: "res.cloudinary.com" },
          { hostname: "lh3.googleusercontent.com" },
          { hostname: "images.unsplash.com" },
        ],
      },
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=31536000; includeSubDomains',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  