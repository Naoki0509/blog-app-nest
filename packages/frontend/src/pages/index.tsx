import { BlogCard } from '../components/mol/Card/blogCard'

const Home = () => {
  return (
    <div className="min-h-screen min-w-full items-center justify-center">
      <h1 className="text-center">Blog List</h1>
      <BlogList />
    </div>
  )
}

export default Home

const BlogList = () => {
  return (
    <div className="flex flex-col bg-yellow-50">
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
