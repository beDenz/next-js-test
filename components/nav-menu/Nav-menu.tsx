import styles from './Nav-menu.module.scss'
import Link from 'next/link'

interface MenuItem {
  id: number
  link: string
  title: string
}

const NavMenuItem: React.FC<MenuItem> = ({ id, link, title }) => {
  return (
    <li className={styles['nav-menu-item']}>
      <Link href={link}>{title}</Link>
    </li>
  )
}

const NavMenu: React.FC<{ list: MenuItem[] }> = ({ list }): JSX.Element => {
  return (
    <ul className={styles.navMenu}>
      {list.map(({ id, link, title }) => (
        <NavMenuItem id={id} link={link} title={title} key={id} />
      ))}
    </ul>
  )
}

export { NavMenu }
