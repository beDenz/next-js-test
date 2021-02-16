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
];


const aboutPageMeta = {
  title: 'About Page',
  description: 'about next js page info',
  keywords:'bla-bla-bla'
}

const title = "About page"

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
  res.status(200).json({ menuItem, aboutPageMeta, title, text, ver  })
}

export default handler
