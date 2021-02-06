const client = require('graphql-client')({
  url: 'https://api.hashnode.com',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASHNODE_API}`
  }
});

export default client;