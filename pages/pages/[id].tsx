import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'
import { GetStaticProps, GetStaticPaths } from 'next'

type PageProps = {
  menu: MenuItem[]
  meta: Meta
  title: string
  ver: string
}

const Page = ({ menu, meta, title, ver }: PageProps): React.ReactNode => {
  return (
    <Layout menuItem={menu} meta={meta}>
      <h1>{title}</h1>
      <p>ver {ver}</p>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(process.env.PAGES_PAGE)
  const result = await res.json()
  const { pagesPath } = result
  return {
    paths: pagesPath,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const url =
    process.env.NODE_ENV === 'production'
      ? `${process.env.PAGE_ID}${params.id}.json`
      : `${process.env.PAGE_ID}${params.id}`

  const res = await fetch(url)
  const result = await res.json()

  return {
    props: result,
  }
}

export default Page
