// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { conn } from 'src/utils/db'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const request=await conn.query('select * from tasks')

  res.status(200).json({ name: 'John Doe' })
}
