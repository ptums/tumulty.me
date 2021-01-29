module.exports = {
  images: {
    domains: [`cdn.sanity.io`],
  },
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generate-sitemap')
    }

    return config
  }
}