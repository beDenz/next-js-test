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
  title: 'About Page',
  description: 'about next js page info',
  keywords: 'bla-bla-bla',
}

const title = 'About page'

const text = `
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem
unde, corporis eligendi inventore blanditiis autem natus minima quasi
sunt, esse eaque! Soluta, cum tempora. Maiores numquam magnam eos culpa.
unde, corporis eligendi inventore blanditiis autem natus minima quasi
sunt, esse eaque! Soluta, cum tempora. Maiores numquam magnam eos culpa.
unde, corporis eligendi inventore blanditiis autem natus minima quasi
sunt, esse eaque! Soluta, cum tempora. Maiores numquam magnam eos culpa.
unde, corporis eligendi inventore blanditiis autem natus minima quasi
sunt, esse eaque! Soluta, cum tempora. Maiores numquam magnam eos culpa.`

const ver = 1

//////

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ menu, meta, title, text, ver })
}

export default handler
