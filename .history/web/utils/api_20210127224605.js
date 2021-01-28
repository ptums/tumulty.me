import client from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`

export async function getPreviewPostBySlug(slug) {
  const data = await client.fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome() {
  const results = await client.fetch(`*[_type == "post"]{
    title,
    'description': description,
    'image':mainImage.asset._ref,
    'date':publishedAt,
    'slug': slug.current
    }`)

  console.log(results)

  return results
}

export async function getPostAndMorePosts(slug, preview) {
  const [post, morePosts] = await Promise.all([
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    client.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
