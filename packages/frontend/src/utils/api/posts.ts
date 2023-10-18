export const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feed`)
  const data = await res.json()
  return data
}

export const getPostById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
  const data = await res.json()
  return data
}
