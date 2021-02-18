import { Layout } from 'components/layout/Layout'

function About({ menuItem, aboutPageMeta, title, text, ver }): React.ReactNode {
  return (
    <Layout menuItem={menuItem} meta={aboutPageMeta}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>ver {ver}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.ABOUT_PAGE)

  const result = await res.json()

  const { menuItem, aboutPageMeta, title, text, ver } = result

  return {
    props: {
      menuItem,
      aboutPageMeta,
      title,
      text,
      ver,
    },
    revalidate: 60,
  }
}

export default About
