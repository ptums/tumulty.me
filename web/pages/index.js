import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllPostsForHome } from 'utils/api'
import Article from 'components/article'

export default function Index({ allPosts }) {
  const router = useRouter();

  if (!router.isFallback && allPosts.length <= 0) {
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
              key={post.title}
              title={post.title}
              link={post.slug}
              description={post.description}
              date={post.date}
              image={post.image}
              categories={post.categories}
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
  const allPosts = await getAllPostsForHome()
  return {
    props: { allPosts: allPosts.sort((a,b) => new Date(b.date) - new Date(a.date)) }
  }
}
