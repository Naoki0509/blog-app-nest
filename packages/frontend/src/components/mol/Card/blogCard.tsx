type FeedType = {
  key: string
  title: string
  subtitle: string
  updatedAt: string
}

export const BlogCard = (data: FeedType) => {
  return (
    <div className="card border border-gray-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">タイトル１</h2>
        <p>サブタイトル1</p>
        <time>2023.10.03</time>
      </div>
    </div>
  )
}
