module.exports = {
  images: {
    domains: [`cdn.sanity.io`],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generate-sitemap')
    }

    return config
  }
}