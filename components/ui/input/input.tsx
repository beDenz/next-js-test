import styles from './input.module.scss'

export type InputProps = {
  value: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ value, placeholder }) => {
  return (
    <div className={styles.input}>
      <input value={value} placeholder={placeholder} />
    </div>
  )
}

export { Input }
