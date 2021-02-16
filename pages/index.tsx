import { Layout } from '../components/layout/Layout'

export const Home = ({ menuItem, mainPageMeta }): JSX.Element => {
  return (
    <Layout menuItem={menuItem} meta={mainPageMeta}>
      <div>Main Page</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.MAIN_PAGE)

  const result = await res.json()

  const { menuItem, mainPageMeta } = result

  return {
    props: {
      menuItem,
      mainPageMeta,
    },
  }
}

export default Home
