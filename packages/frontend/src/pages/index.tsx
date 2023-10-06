import { GetStaticProps } from 'next'

import { Layout } from '../components/Layout'
import { BlogCard } from '../components/mol/Card/blogCard'

const Home = ({ props }: Props) => {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold">Blog List</h1>
      <BlogList data={props} />
    </Layout>
  )
}

const BlogList = (data: Props) => {
  return (
    <div className="flex flex-col py-8 ">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feed`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  const data = await res.json()

  return {
    props: data,
  }
}
