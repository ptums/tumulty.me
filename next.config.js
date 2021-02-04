module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/tumulty-web-services/image/upload',
  },
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generate-sitemap')
    }

    return config
  }
}