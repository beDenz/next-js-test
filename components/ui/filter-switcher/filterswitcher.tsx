import styles from './filterswitcher.module.scss'
import classNames from 'classnames'

export type FilterSwitcherItem = {
  id: number
  value: string
}

export type FilterSwitcherProps = {
  data: FilterSwitcherItem[]
  activeId: number
  onChange: (id: number) => void
}

const FilterSwitcher: React.FC<FilterSwitcherProps> = ({
  data,
  activeId,
  onChange,
}) => {
  return (
    <div className={styles.filterSwitcher}>
      {data.map(({ id, value }) => (
        <div
          key={id}
          onClick={() => onChange(id)}
          className={classNames(styles.filterSwitcherItem, {
            [styles.on]: activeId === id,
            [styles.off]: activeId !== id,
          })}
        >
          {value}
        </div>
      ))}
    </div>
  )
}

export { FilterSwitcher }
