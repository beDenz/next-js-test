import styles from './filters.module.scss'
import classNames from 'classnames'
import { useState, useRef, useCallback } from 'react'
import { useOnClickOutside } from 'customhooks'
import { CSSTransition } from 'react-transition-group'
import { Checkbox } from 'components/ui'

type FiltersData = {
  id: number
  items: DropdownListItem[]
}

type DropdownListItem = {
  id: number
  type: string
  value: string
}

type DropdownListProps = {
  data: DropdownListItem[]
  onChange: (id: number[]) => void
}

const FiltersDropdownList: React.FC<DropdownListProps> = ({
  data,
  onChange,
}) => {
  const [selected, setSelected] = useState<number[]>([])

  const isSelectedItem = useCallback(
    (id: number): boolean => selected.includes(id),
    [selected]
  )

  const onToggleItem = (id: number): void => {
    if (isSelectedItem(id)) {
      setSelected((prev) => prev.filter((item) => item !== id))
    } else setSelected((prev) => [...prev, id])
  }

  const selectAllItem = (): void => {
    setSelected(data.map(({ id }) => id))
  }

  const onAcceptFilter = (): void => {
    onChange(selected)
  }

  return (
    <div
      className={classNames(styles.dropdownList, styles.dropdownListSubtract)}
    >
      {data.map(({ id, value, type }) => (
        <div
          className={classNames(styles.dropdownListItem, {
            [styles[`icon-${type}`]]: type,
          })}
          key={id}
          onClick={() => onToggleItem(id)}
        >
          <span>{value}</span>
          <Checkbox
            status={isSelectedItem(id)}
            onChange={() => onToggleItem(id)}
          />
        </div>
      ))}
      <div className={styles.dropdownListFooter}>
        <span onClick={selectAllItem}>Select All</span>
        <span onClick={onAcceptFilter}>Accept</span>
      </div>
    </div>
  )
}

export type FiltersProps = {
  data: FiltersData
  value: string
  placeholder: string
  onChange: (id) => void
}

const Filters: React.FC<FiltersProps> = ({
  data,
  value,
  placeholder = 'Select filter',
  onChange,
}) => {
  const { id, items } = data

  const [isVisible, setVisible] = useState<boolean>(false)

  const toogleVisibleDropdownList = () => {
    setVisible((prev) => !prev)
  }

  const listRef = useRef()
  useOnClickOutside(listRef, () => setVisible(false))

  const onSelectListItem = useCallback((id) => {
    setVisible(false)
    onChange(id)
  }, [])

  return (
    <div className={styles.filters} ref={listRef} key={id}>
      <div
        className={classNames(styles.filtersInner, styles.placeholder)}
        onClick={toogleVisibleDropdownList}
      >
        {value ? (
          <span className={styles.value}> {value}</span>
        ) : (
          <span className={styles.placeholder}>{placeholder}</span>
        )}
      </div>
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames={{
          enter: styles.dropdownListEnter,
          enterActive: styles.dropdownListEnterActive,
          exit: styles.dropdownListExit,
          exitActive: styles.dropdownListExitActive,
        }}
        unmountOnExit
      >
        <FiltersDropdownList data={items} onChange={onSelectListItem} />
      </CSSTransition>
    </div>
  )
}

export { Filters }
