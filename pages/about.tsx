import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'
import { GetStaticProps } from 'next'

type PageProps = {
  menu: MenuItem[]
  meta: Meta
  title: string
  ver: string
  text: string
}

function About({ menu, meta, title, text, ver }: PageProps): React.ReactNode {
  return (
    <Layout menuItem={menu} meta={meta}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>ver {ver}</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.ABOUT_PAGE)

  const result = await res.json()

  const { menu, meta, title, text, ver } = result

  return {
    props: {
      menu,
      meta,
      title,
      text,
      ver,
    },
    revalidate: 60,
  }
}

export default About
