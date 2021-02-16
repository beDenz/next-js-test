import { Layout } from '../components/layout/Layout'

export const Ssr = ({
  menuItem,
  ssrPageMeta,
  title,
  text,
  ver,
}): JSX.Element => {
  return (
    <Layout menuItem={menuItem} meta={ssrPageMeta}>
      <h1>{title}</h1>
      <p>{text}</p>
      <p>ver {ver}</p>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(process.env.SSR_PAGE)

  const result = await res.json()

  if (!result) {
    return {
      notFound: true,
    }
  }

  const { menuItem, ssrPageMeta, title, text, ver } = result

  return {
    props: {
      menuItem,
      ssrPageMeta,
      title,
      text,
      ver,
    },
  }
}

export default Ssr
