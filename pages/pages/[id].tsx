import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'

type PageProps = {
  menu: MenuItem[]
  meta: Meta
  title: string
  ver: string
  id: string | number
}

const Page = (props: PageProps) => {
  const { menu, meta, title, ver } = props

  return (
    <Layout menuItem={menu} meta={meta}>
      <h1>{title}</h1>
      <p>ver {ver}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch(process.env.PAGES_PAGE)

  const result = await res.json()

  const { pagesPath } = result

  return {
    paths: pagesPath,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const url =
    process.env.NODE_ENV === 'production'
      ? `${process.env.PAGE_ID}${params.id}.json`
      : `${process.env.PAGE_ID_GIT}${params.id}.json`

  const res = await fetch(url)
  const result = await res.json()

  return {
    props: result,
  }
}

export default Page
