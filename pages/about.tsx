import { Layout } from 'components/layout/Layout'

function About({ menuItem, aboutPageMeta }): JSX.Element {
  return (
    <Layout menuItem={menuItem} meta={aboutPageMeta}>
      <div>About page</div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.ABOUT_PAGE)

  const result = await res.json()

  const { menuItem, aboutPageMeta } = result

  return {
    props: {
      menuItem,
      aboutPageMeta,
    },
  }
}

export default About
