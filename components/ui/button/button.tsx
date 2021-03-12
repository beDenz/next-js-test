import styles from './button.module.scss'

export type ButtonProps = {
  title?: string
  primary?: boolean
  color?: string
  addIcon?: boolean
  linkIcon?: boolean
  disable?: boolean
  onClick?: () => void
}

const classJoin = (arr: string[]): string => arr.join(' ')

const Button: React.FC<ButtonProps> = ({
  primary,
  title,
  color = 'blue',
  disable,
  addIcon,
  linkIcon,
  ...props
}) => {
  const style = classJoin([
    styles.button,
    primary
      ? styles[`button--primary--${color}`]
      : styles[`button--secondary--${color}`],
    addIcon && styles.addIcon,
    linkIcon && styles.linkIcon,
    disable && styles['button--disable'],
  ])

  return (
    <button className={style} {...props}>
      {title && <span>{title}</span>}
    </button>
  )
}

export { Button }
