import { useRouter } from 'next/router'
import { ArticleJsonLd } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import ErrorPage from 'next/error'
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';
import { getAllPostsWithSlug, getPostAndMorePosts } from 'utils/api'
import client from 'utils/sanity'
import styles from 'styles/Post.module.css'

function urlFor (source) {
  return useNextSanityImage(
		client,
		source
	);
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
        <meta name="description" content={post.description} />        
      </Head>
      <ArticleJsonLd
          url={`https://tumulty.me${router.asPath}`}
          title={post.title}
          images={[
            featuredImage.src
          ]}
          datePublished={post.date}
          dateModified={post.date}
          authorName={['Peter F. Tumulty']}
          publisherName="Peter F. Tumulty"
          publisherLogo="/me.png"
          description={post.description}
        />
      <div className={styles.container}>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <Image
       {...featuredImage} sizes="(max-width: 620px) 100vw, 620px"
       layout="intrinsic"
       alt={post.title}
      />
      <BlockContent blocks={post.body} className={styles.post} />
      </div>
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
