import React from 'react'
import { render } from '../testUtils'
// import { render, fireEvent } from '../testUtils'
import { Home } from 'pages/index'

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
  title: 'Main Page',
  description: 'main next js page info',
  keywords: 'bla-bla-bla',
}

const title = 'Main Page'

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem
unde, corporis eligendi inventore blanditiis autem natus minima quasi
sunt, esse eaque! Soluta, cum tempora. Maiores numquam magnam eos culpa.`

const ver = '1'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Home menu={menu} meta={meta} title={title} text={text} ver={ver} />,
      {}
    )
    expect(asFragment()).toMatchSnapshot()
  })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(<Home />, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })
})
