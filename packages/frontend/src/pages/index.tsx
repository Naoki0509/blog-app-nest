import { GetStaticProps } from 'next'

import Link from 'next/link'

import { Layout } from '../components/Layout'
import { FeedType } from '../types'

type Props = {
  data: FeedType[]
}

const Home = ({ data }: Props) => {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold">Blog List</h1>
      <div className="flex flex-col pt-8">
        {data.map((item) => (
          <Link key={item.id} href={`${item.id}`}>
            <div key={item.id} className="border-w card border p-6 shadow-md">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feed`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
