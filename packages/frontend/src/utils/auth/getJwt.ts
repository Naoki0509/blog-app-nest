import { NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'

export const getJwt = (req: NextApiRequest): Promise<string> => {
  const token = getToken({ req, raw: true })

  if (!token) {
    throw new Error('No JWT found')
  }

  return token
}
