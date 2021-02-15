import styles from './Logo.module.scss'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/">
    <div className={styles.logo}>
      <span>Logo</span>
    </div>
  </Link>
)

export { Logo }
