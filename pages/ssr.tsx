import { Layout } from '../components/layout/Layout'

export const Ssr = ({
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

export async function getServerSideProps(context) {
  const res = await fetch(process.env.SSR_PAGE)

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
  }
}

export default Ssr
