import Head from 'next/head'
import { ReactNode } from 'react'
import { MenuItem } from 'types/types'
import { Header } from 'components/header'
import { Container } from 'components/container'

function Layout({
  children,
  // menuItem,
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
      <Header />
      <main>{children}</main>
      <footer></footer>
    </Container>
  )
}

export { Layout }
