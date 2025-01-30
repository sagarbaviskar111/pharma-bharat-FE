module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Add the Cloudinary domain here
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Proxy all requests starting with /api
        destination: 'http://localhost:5000/:path*', // Proxy to your backend API server
      },
    ];
  },
};
