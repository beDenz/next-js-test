import Error from 'next/error'

export default function NotFound(): React.ReactNode {
  return <Error statusCode={404} title="Page not found"></Error>
}
