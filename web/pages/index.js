import Head from 'next/head';

import { getAllPostsForHome } from '../utils/api'

export default function Index({allPosts}) {
  return (
    <>
      <Head>
        <title>A blog about the coding and the web</title>
      </Head>
      <section>        
        {JSON.stringify(allPosts)}

        <style jsx>{`
          section {
            margin-top: 3.5em;
          }

        `}</style>
      </section>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}