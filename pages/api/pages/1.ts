/* eslint-disable */

import { NextApiRequest, NextApiResponse } from 'next'

const menu = [
  {
    id: 1,
    link: '/',
    title: 'home',
  },
  {
    id: 2,
    link: '/pages',
    title: 'pages',
  },
  {
    id: 3,
    link: '/about',
    title: 'about',
  },
  {
    id: 4,
    link: '/ssr',
    title: 'ssr',
  },
  {
    id: 5,
    link: '/',
    title: 'login',
  },
]

const meta = {
  title: 'Page 1 title',
  description: 'Page 1 description',
  keywords: 'page 1 page 1 page 1',
}

const title = 'Page #1'

const ver = 1

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ menu, meta, title, ver })
}

export default handler
