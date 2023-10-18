export type FeedType = {
  id: string
  title: string
  subtitle: string
}

export type PostType = {
  id: number
  title: string
  subtitle: string
  content: string
  published: boolean
  authorId: string
  createdAt: Date
  updatedAt: Date
}
