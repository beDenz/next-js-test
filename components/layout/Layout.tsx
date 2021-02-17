import Head from 'next/head'
import { Container } from '@material-ui/core'
import { NavMenu } from '../nav-menu/Nav-menu'
import { Logo } from '../logo/Logo'
import { ReactNode } from 'react'

import { MenuItem } from 'types/types'

function Layout({
  children,
  menuItem,
  meta,
}: {
  children: ReactNode
  menuItem: MenuItem[]
  meta: any
}): JSX.Element {
  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <header className="header">
        <Logo />
        <NavMenu list={menuItem} />
      </header>
      <main>{children}</main>
      <footer></footer>
    </Container>
  )
}

export { Layout }
