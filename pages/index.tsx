import { Layout } from '../components/layout/Layout'

export const Home = ({
  menuItem,
  mainPageMeta,
  title,
  text,
  ver,
}): JSX.Element => {
  return (
    <Layout menuItem={menuItem} meta={mainPageMeta}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>ver {ver}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(process.env.MAIN_PAGE)

  const result = await res.json()

  const { menuItem, mainPageMeta, title, text, ver } = result

  return {
    props: {
      menuItem,
      mainPageMeta,
      title,
      text,
      ver,
    },
    revalidate: 60,
  }
}

export default Home
