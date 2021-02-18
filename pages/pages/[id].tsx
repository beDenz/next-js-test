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
  console.log('Page props', props)

  const { menu, meta, title, ver } = props

  if (!menu) return null

  // return <div>!!</div>
  return (
    <Layout menuItem={menu} meta={meta}>
      <h1>{title}</h1>
      <p>ver {ver}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  console.log('!!!Page getStaticPaths!!')

  const res = await fetch(process.env.PAGES_PAGE)

  const result = await res.json()

  const { pagesPath } = result

  return {
    paths: pagesPath,
    fallback: true,
  }
}
export async function getStaticProps({ params }) {
  console.log('!!!Page getStaticProps!!!')

  const url =
    process.env.NODE_ENV === 'production'
      ? `${process.env.PAGE_ID}${params.id}.json`
      : `${process.env.PAGE_ID_GIT}${params.id}.json`

  console.log('!!!url', url)

  const res = await fetch(url)
  const result = await res.json()

  //  const { menu, meta, title, ver } = result

  return {
    props: { ...result, url, params },
  }
}

export default Page
