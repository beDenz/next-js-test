import styles from './search.module.scss'
import { Input } from '../input/input'

export type SearchProps = {
  value: string
  onChange: () => void
}

const Search: React.FC<SearchProps> = ({ onChange, ...args }) => {
  return (
    <div className={styles.search}>
      <Input placeholder="Search" {...args} onChange={onChange} />
    </div>
  )
}

export { Search }
