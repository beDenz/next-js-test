import { Layout } from '../components/layout/Layout'

export const Home = ({ menuItem }): JSX.Element => {
  return (
    <Layout menuItem={menuItem}>
      <div>Main Page</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.MAIN_PAGE)

  const result = await res.json()

  const { menuItem } = result

  return {
    props: {
      menuItem,
    },
  }
}

export default Home
