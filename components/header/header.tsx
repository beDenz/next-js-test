import styles from './header.module.scss'
import { Logo } from '../ui/logo/logo'
import Link from 'next/link'
import classNames from 'classnames'

export type HeaderProps = {
  temp?: string
}

const menu = [
  {
    id: 1,
    link: '/#',
    value: 'Valuebets',
  },
  {
    id: 2,
    link: '/#',
    value: 'Filters',
  },
  {
    id: 3,
    link: '/#',
    value: 'Accounts',
  },
  {
    id: 4,
    link: '/#',
    value: 'Bet history',
  },
  {
    id: 5,
    link: '/#',
    value: 'Statistics',
  },
  {
    id: 6,
    link: '/#',
    value: 'Settings',
  },
  {
    id: 7,
    link: '/#',
    value: 'Help',
  },
]

const Menu = () => {
  return (
    <nav className={styles.nav}>
      {menu.map(({ id, link, value }) => (
        <div className={classNames(styles.navItem, styles.unactive)} key={id}>
          <Link href={link}>{value}</Link>
        </div>
      ))}
    </nav>
  )
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  )
}

export { Header }
