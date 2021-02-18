import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'

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
}: PageProps): React.ReactNode => {
  return (
    <Layout menuItem={menu} meta={meta}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>ver {ver}</p>
    </Layout>
  )
}

export async function getStaticProps() {
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
    revalidate: 60,
  }
}

export default Home
