import { NextApiRequest } from 'next'

import { getJwt } from '../../utils/auth/getJwt'

export const getLatestPosts = async (req: NextApiRequest) => {
  const token = await getJwt(req)

  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? ''

  const res = await fetch(`${baseUrl}/posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error('Could not fetch posts')
  }

  return await res.json()
}
