import { getAllPostsForHome } from '../utils/api'
export default function Index({allPosts}) {
  console.log(allPosts);
  return (
    <div>
      <p>Hello world!</p>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}