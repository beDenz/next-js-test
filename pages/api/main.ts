// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const menuItem = [
  {
    id: 1,
    link: '/',
    title: 'home',
  },
  {
    id: 2,
    link: '/',
    title: 'id',
  },
  {
    id: 3,
    link: '/about',
    title: 'about',
  },
  {
    id: 4,
    link: '/',
    title: 'login',
  },
]

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ menuItem })
}

export default handler
