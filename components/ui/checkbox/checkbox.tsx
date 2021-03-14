import styles from './checkbox.module.scss'
import classNames from 'classnames'

export type CheckboxProps = {
  status: boolean
  onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ status, onChange }) => {
  return (
    <div
      className={classNames(styles.checkbox, {
        [styles.on]: status,
      })}
      onClick={onChange}
    ></div>
  )
}

export { Checkbox }
