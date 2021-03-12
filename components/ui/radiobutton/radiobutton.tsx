import styles from './radiobutton.module.scss'
import classNames from 'classnames'

export type RadiobuttonProps = {
  status: boolean
  onChange: () => void
}

const Radiobutton: React.FC<RadiobuttonProps> = ({ status, onChange }) => {
  return (
    <div
      className={classNames(styles.radiobutton, {
        [styles.radiobuttonOn]: status,
        [styles.radiobuttonOff]: !status,
      })}
      onClick={onChange}
    ></div>
  )
}

export { Radiobutton }
