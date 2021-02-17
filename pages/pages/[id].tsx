import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'

type PageProps = {
  menu: MenuItem[]
  meta: Meta
  title: string
  ver: string
}

const Page = ({ menu, meta, title, ver }: PageProps) => {
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
    fallback: true,
  }
}
export async function getStaticProps({ params }) {
  const url =
    process.env.NODE_ENV === 'production'
      ? `${process.env.PAGE_ID}${params.id}.json`
      : `${process.env.PAGE_ID}${params.id}`

  const res = await fetch(url)
  const result = await res.json()

  const { menu, meta, title, ver } = result

  console.log('!!!result', {
    props: { menu, meta, title, ver },
  })

  return {
    props: { menu, meta, title, ver },
  }
}

export default Page
