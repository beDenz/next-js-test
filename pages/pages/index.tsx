import { Layout } from 'components/layout/Layout'
import { MenuItem, Meta } from 'types/types'
import Link from 'next/link'
import { GetStaticProps } from 'next'

type PagesIdItem = {
  id: string
  link: string
  title: string
}

type PagesProps = {
  menu: MenuItem[]
  meta: Meta
  title: string
  pagesIds: PagesIdItem[]
}

const Pages = ({
  menu,
  meta,
  title,
  pagesIds,
}: PagesProps): React.ReactNode => {
  return (
    <Layout menuItem={menu} meta={meta}>
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(process.env.PAGES_PAGE)

  const result = await res.json()

  const { menu, meta, title, pagesIds } = result

  return {
    props: { menu, meta, title, pagesIds },
    revalidate: +process.env.REVALIDATE_HIGH,
  }
}

export default Pages
