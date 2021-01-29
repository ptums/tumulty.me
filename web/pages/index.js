import Head from 'next/head'
import { getAllPostsForHome } from 'utils/api'
import Article from 'components/article'

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>A blog about the coding and the web</title>
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
    props: { allPosts },
  }
}
