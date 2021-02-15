import { Layout } from 'components/layout/Layout'

function About({ menuItem }): JSX.Element {
  return (
    <Layout menuItem={menuItem}>
      <div>About page</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/main')

  const result = await res.json()

  const { menuItem } = result

  return {
    props: {
      menuItem,
    },
  }
}

export default About
