import { useRouter } from 'next/router'
import { ArticleJsonLd } from 'next-seo'
import Head from 'next/head'
import ErrorPage from 'next/error'
import client from 'utils/api'
import limitBrief from 'utils/limit-brief'
import styles from 'styles/Post.module.css'

function createMarkup(content) {
  return {__html: content};
}

export default function Post({ post }) {
  const router = useRouter();

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
            post.coverImage
          ]}
          datePublished={post.date}
          dateModified={post.date}
          authorName={['Peter F. Tumulty']}
          publisherName="Peter F. Tumulty"
          publisherLogo="/me.png"
          description={limitBrief(post.brief)}
        />
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={createMarkup(post.content)} />
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const post = await client.query(`{
    post(slug:"${params.slug}", hostname:"${process.env.NEXT_PUBLIC_HASHNODE_USER}") {
       title
       cuid
       content
       slug
       coverImage
       brief
       dateAdded
     }
   }`, {});
  return {
    props: {
      post: post.data.post
    }
  }
}