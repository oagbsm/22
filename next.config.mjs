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
        has: [
          {
            type: 'host',
            value: 'cityconsulting.com',
          },
        ],
        destination: 'https://technology.cityconsulting.com',
        permanent: true,
      },
      {
        source: '/technology',
        has: [
          {
            type: 'host',
            value: 'www.cityconsulting.com',
          },
        ],
        destination: 'https://technology.cityconsulting.com',
        permanent: true,
      },
      {
        source: '/technology/:path*',
        has: [
          {
            type: 'host',
            value: 'cityconsulting.com',
          },
        ],
        destination: 'https://technology.cityconsulting.com/:path*',
        permanent: true,
      },
      {
        source: '/technology/:path*',
        has: [
          {
            type: 'host',
            value: 'www.cityconsulting.com',
          },
        ],
        destination: 'https://technology.cityconsulting.com/:path*',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'technology.cityconsulting.com',
          },
        ],
        destination: '/technology',
        permanent: false,
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'www.technology.cityconsulting.com',
          },
        ],
        destination: '/technology',
        permanent: false,
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

  async rewrites() {
    return [
      {
        source: '/technology',
        has: [
          {
            type: 'host',
            value: 'technology.cityconsulting.com',
          },
        ],
        destination: '/technology',
      },
      {
        source: '/technology/:path*',
        has: [
          {
            type: 'host',
            value: 'technology.cityconsulting.com',
          },
        ],
        destination: '/technology/:path*',
      },
      {
        source: '/technology',
        has: [
          {
            type: 'host',
            value: 'www.technology.cityconsulting.com',
          },
        ],
        destination: '/technology',
      },
      {
        source: '/technology/:path*',
        has: [
          {
            type: 'host',
            value: 'www.technology.cityconsulting.com',
          },
        ],
        destination: '/technology/:path*',
      },
    ];
  },
};

export default nextConfig;
