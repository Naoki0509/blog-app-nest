import { GetStaticProps } from 'next'

import { propagateServerField } from 'next/dist/server/lib/render-server'

import { Layout } from '../components/Layout'
import { BlogCard } from '../components/mol/Card/blogCard'

type FeedType = {
  id: string
  title: string
  subtitle: string
  updatedAt: string
}

const Home = (props: FeedType[]) => {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold">Blog List</h1>
      <div className="flex flex-col">
        {props.map((item: FeedType) => {
          return (
            <BlogCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              updatedAt={item.updatedAt}
            />
          )
        })}
      </div>
    </Layout>
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
