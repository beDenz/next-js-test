import { Layout } from 'components/layout'
import { MenuItem, Meta } from 'types/types'
import { GetStaticProps } from 'next'

type PageProps = {
  menu: MenuItem[]
  meta: Meta
  title: string
  ver: string
  text: string
}

export const Home = ({
  menu,
  meta,
  title,
  text,
  ver,
}: PageProps): JSX.Element => {
  return (
    <Layout menuItem={menu} meta={meta}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>ver {ver}</p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.MAIN_PAGE)

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
    revalidate: +process.env.REVALIDATE_HIGH,
  }
}

export default Home
