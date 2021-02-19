import React from 'react'
import { render } from 'test/testUtils'
import { create } from 'react-test-renderer'
// import { render, fireEvent } from '../testUtils'
import { NavMenu } from './Nav-menu'

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

describe('Navigation Menu', () => {
  it('naavigation menu matches snapshot', () => {
    const { asFragment } = render(<NavMenu list={menu} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('navigation menu current item', () => {
    const rerender = create(<NavMenu list={menu} />)

    expect(rerender.root.findAllByType('li').length).toBe(menu.length)
  })
})
