import { useRouter } from 'next/router'
import BlockContent from '@sanity/block-content-to-react'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'utils/api'

export default function Post({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  console.log(post)

  console.log(post)
  return (
    <div>
      <h3>{post.title}</h3>
      <BlockContent blocks={post.body} className={markdownStyles.markdown} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug)
  return {
    props: {
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
