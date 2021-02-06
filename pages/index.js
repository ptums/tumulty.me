import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import client from 'utils/api'
import Article from 'components/article'

export default function Index({ allPosts }) {
  const router = useRouter();

  if (!router.isFallback && allPosts.lenght <= 0) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>A blog on coding and the web by Peter Tumulty</title>
        <meta name="description" content="Peter Tumulty is a lead web developer who likes to write about coding, seo, web page optimization, and variety of topics on web development"></meta>
      </Head>
      <section>
        {allPosts &&
          allPosts.map((post) => (
            <Article
              key={post.cuid}
              title={post.title}
              link={post.slug}
              description={post.brief}
              date={post.dateAdded}
              categories={[]}
            />
          ))}

        <style jsx>{`
          section {
            margin-top: 2em;
          }
        `}</style>
      </section>
    </>
  )
}

export async function getStaticProps() {  
  const oldestPosts =  await client.query(`
    query {
      user(username:"${process.env.NEXT_PUBLIC_HASHNODE_USER}"){
      publication{
        posts(page:0){
          title
          brief
          slug
          cuid
          dateAdded
        }
      }
    }
    }`, {});

    const latestPosts =  await client.query(`
    query {
      user(username:"${process.env.NEXT_PUBLIC_HASHNODE_USER}"){
      publication{
        posts(page:1){
          title
          brief
          slug
          cuid
          dateAdded
        }
      }
    }
    }`, {});


  return {
    props: {
      allPosts: [].concat(oldestPosts.data.user.publication.posts, latestPosts.data.user.publication.posts)
    },
    revalidate: 1,
  }
}
