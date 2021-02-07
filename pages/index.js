import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { request } from 'graphql-request'
import client from 'utils/api'
import Article from 'components/article'
import styles from 'styles/LoadMore.module.css'

const fetcher = query => request('https://api.hashnode.com', query);

const postQuery = (page, username) => `
query {
  user(username:"${username}"){
  publication{
    posts(page:${page}){
      title
      brief
      slug
      cuid
      dateAdded
    }
  }
}
}`

export default function Index({ allPosts }) {
  const [ page, setPage ] = useState(0);
  const [ pagePosts, setPagePosts ] = useState(allPosts);
  const [ shouldFetch, setShouldFetch ] = useState(false);
  const [ allPostLen, setAllPostLen ] = useState(-1);
  const { data, error } = useSWR(
    shouldFetch ? postQuery(page, process.env.NEXT_PUBLIC_HASHNODE_USER)
    : null,
    fetcher
  );
  const router = useRouter();


  if (!router.isFallback && allPosts.lenght <= 0) {
    return <ErrorPage statusCode={404} />
  }

  function loadMorePosts() { 
    setShouldFetch(true);
    setPage(page => page + 1);  
  }

  useEffect(() => {
    if(shouldFetch && data) {
      setAllPostLen(data.user.publication.posts.length);
      if(data.user.publication.posts.length > 0) {
        setPagePosts(pagePosts => [...pagePosts, ...data.user.publication.posts]);
      }
    }  
  }, [shouldFetch, data]);

  return (
    <>
      <Head>
        <title>A blog on coding and the web by Peter Tumulty</title>
        <meta name="description" content="Peter Tumulty is a lead web developer who likes to write about coding, seo, web page optimization, and variety of topics on web development"></meta>
      </Head>
      <section>
        {pagePosts &&
          pagePosts.map((post) => (
            <Article
              key={post.cuid}
              title={post.title}
              link={post.slug}
              description={post.brief}
              date={post.dateAdded}
              categories={[]}
            />
          ))}
          {allPostLen !== 0 && (
            <button
              type="button"
              onClick={() => loadMorePosts()}
              className={styles.loadMore}
            >
              Load More
            </button> 
          )}          
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
  const latestPosts =  await client.query(postQuery(0, process.env.NEXT_PUBLIC_HASHNODE_USER), {});

  return {
    props: {
      allPosts: latestPosts.data.user.publication.posts || []
    },
    revalidate: 1,
  }
}
