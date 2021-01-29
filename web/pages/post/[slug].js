import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import ErrorPage from 'next/error'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { getAllPostsWithSlug, getPostAndMorePosts } from 'utils/api'
import client from 'utils/sanity'
import styles from 'styles/Post.module.css'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export default function Post({ post }) {
  const router = useRouter();
  const featuredImage = urlFor(post.image);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  


  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <Image
       src={featuredImage.url()}
       width={620}
       height={240}
       layout="intrinsic"
      />
      <BlockContent blocks={post.body} className={styles.post} />
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
