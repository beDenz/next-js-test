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


const pagesIds = [
  {
    id: 1,
    link: '/pages/1',
    title: '/pages/1'
  },
  {
    id: 2,
    link: '/pages/2',
    title: '/pages/2'
  },
  {
    id: 3,
    link: '/pages/3',
    title: '/pages/3'
  },
  {
    id: 4,
    link: '/pages/4',
    title: '/pages/4'
  },
  {
    id: 5,
    link: '/pages/5',
    title: '/pages/5'
  },
]

const pagesPageMeta = {
  title: 'Pages Page',
  description: 'pages next js page info',
  keywords: 'bla bla bla',
}

const title = 'Pages Page'



const pagesPath = [
  {
    params: {
      id: '1'
    },
  },
  {
    params: {
      id: '2'
    }
  }, {
    params: {
      id: '3'
    }
  },
  {
    params: {
      id: '4'
    }
  },
  {
    params: {
      id: '5'
    }
  }
]



const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ menuItem, pagesPageMeta, title, pagesIds, pagesPath })
}

export default handler
