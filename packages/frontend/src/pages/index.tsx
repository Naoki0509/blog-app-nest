import { GetStaticProps } from 'next'

import { Layout } from '../components/Layout'

type FeedType = {
  id: string
  title: string
  subtitle: string
}

type Props = {
  props: FeedType
}

const Home = ({ props }: Props) => {
  console.log(props.)

  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold">Blog List</h1>
      <div className="flex flex-col">
        {props.map((item) => (
          <div key={item.id} className="card">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-500">{item.subtitle}</p>
          </div>
        ))}
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
    props: {
      data,
    },
  }
}
