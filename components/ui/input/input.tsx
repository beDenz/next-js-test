import styles from './input.module.scss'

export type InputProps = {
  value: string
  placeholder?: string
  onChange: () => void
}

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <div className={styles.input}>
      <input value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export { Input }
