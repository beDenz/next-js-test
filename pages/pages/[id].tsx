import { Layout } from '../../components/layout/Layout'

const Page = ({ menu, meta, title, ver }) => {
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
  console.log('!!!!ENV', process.env.NODE_ENV)

  const res = await fetch(`${process.env.PAGE_ID}${params.id}`)
  const result = await res.json()

  const { menu, meta, title, ver } = result

  return {
    props: { menu, meta, title, ver },
  }
}

export default Page
