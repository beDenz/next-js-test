import { Layout } from 'components/layout/Layout'

function About({ menuItem }): JSX.Element {
  return (
    <Layout menuItem={menuItem}>
      <div>About page</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.ABOUT_PAGE)

  const result = await res.json()

  const { menuItem } = result

  return {
    props: {
      menuItem,
    },
  }
}

export default About
