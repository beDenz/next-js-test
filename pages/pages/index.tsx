import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'
import Link from 'next/link'

type PagesIdItem = {
  id: string
  link: string
  title: string
}

type PagesProps = {
  menuItem: MenuItem[]
  pagesPageMeta: Meta
  title: string
  pagesIds: PagesIdItem[]
}

const Pages = ({ menuItem, pagesPageMeta, title, pagesIds }: PagesProps) => {
  return (
    <Layout menuItem={menuItem} meta={pagesPageMeta}>
      <h1>{title}</h1>
      <ul>
        {pagesIds.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  console.log('!!!Pages getStaticProps!!!')

  const res = await fetch(process.env.PAGES_PAGE)

  const result = await res.json()

  const { menuItem, pagesPageMeta, title, pagesIds } = result

  return {
    props: { menuItem, pagesPageMeta, title, pagesIds },
  }
}

export default Pages
