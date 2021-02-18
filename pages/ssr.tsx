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

export const Ssr = ({
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.SSR_PAGE)

  const result = await res.json()

  if (!result) {
    return {
      notFound: true,
    }
  }

  const { menu, meta, title, text, ver } = result

  return {
    props: {
      menu,
      meta,
      title,
      text,
      ver,
    },
  }
}

export default Ssr
