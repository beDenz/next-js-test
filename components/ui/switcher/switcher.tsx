import styles from './switcher.module.scss'
import classNames from 'classnames'

export type SwitcherProps = {
  status: boolean
  onChange: () => void
}

const Switcher: React.FC<SwitcherProps> = ({ status, onChange }) => {
  return (
    <div
      className={classNames(styles.switcher, {
        [styles.switcherOn]: status,
        [styles.switcherOff]: !status,
      })}
      onClick={onChange}
    ></div>
  )
}

export { Switcher }
