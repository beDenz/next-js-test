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

const ssrPageMeta = {
  title: 'SSR Page',
  description: 'main next js page info',
  keywords: 'bla-bla-bla',
}

const title = 'SSR Page'

const text = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem
unde, corporis eligendi inventore blanditiis autem natus minima quasi
sunt, esse eaque! Soluta, cum tempora. Maiores numquam magnam eos culpa.
`

const ver = 1

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ menuItem, ssrPageMeta, title, text, ver })
}

export default handler
