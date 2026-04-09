/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // If you use Next/Image
  images: {
    domains: ['cityconsulting.com', 'www.cityconsulting.com', 'vercel.app'],
  },

  // Redirect root domain to www (optional but recommended)
  async redirects() {
    return [
      {
        source: '/technology',
        destination: 'https://technology.cityconsulting.com',
        permanent: true,
      },
      {
        source: '/technology/:path*',
        destination: 'https://technology.cityconsulting.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cityconsulting.com',
          },
        ],
        destination: 'https://www.cityconsulting.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
