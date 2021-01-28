import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import BlockContent from '@sanity/block-content-to-react'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'utils/api'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <BlockContent blocks={post.body} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  return {
    props: {
      post: data || null
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.map((post) => `/post/${post.slug}`) || [],
    fallback: false,
  }
}
