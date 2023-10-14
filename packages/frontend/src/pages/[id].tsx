import { GetStaticPaths } from 'next'

import { Layout } from '../components/Layout'
import { PostType } from '../types'
import { getAllPosts, getPostById } from '../utils/api/posts'

type Props = {
  post: PostType
}

const PostById = ({ post }: Props) => {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
    </Layout>
  )
}

export default PostById

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllPosts()

  const paths = data.map((post: PostType) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: any) => {
  const post: PostType = await getPostById(params.id)

  return { props: { post } }
}
