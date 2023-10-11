import { GetStaticProps } from 'next'

import { Layout } from '../components/Layout'

type FeedType = {
  id: string
  title: string
  subtitle: string
  updatedAt: string
}

const Home = ({ props }: { props: FeedType[] }) => {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold">Blog List</h1>
      <div className="flex flex-col"></div>
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
    props: {
      data,
    },
  }
}
