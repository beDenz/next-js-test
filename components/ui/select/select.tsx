import styles from './select.module.scss'
import classNames from 'classnames'
import { useState, useRef, useCallback } from 'react'
import { useOnClickOutside } from 'customhooks'
import { CSSTransition } from 'react-transition-group'

type SelectData = {
  id: number
  items: DropdownListItem[]
}

type DropdownListItem = {
  id: number
  value: string
}

type DropdownListProps = {
  data: DropdownListItem[]
  onChange: (id: number) => void
}

const DropdownList: React.FC<DropdownListProps> = ({ data, onChange }) => {
  return (
    <div
      className={classNames(styles.dropdownList, styles.dropdownListSubtract)}
    >
      {data.map(({ id, value }) => (
        <div
          className={styles.dropdownListItem}
          key={id}
          onClick={() => onChange(id)}
        >
          {value}
        </div>
      ))}
    </div>
  )
}

export type SelectProps = {
  data: SelectData
  value: string
  placeholder: string
  onChange: (id) => void
}

const Select: React.FC<SelectProps> = ({
  data,
  value,
  placeholder = 'Select',
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
    <div className={styles.select} ref={listRef} key={id}>
      <div
        className={classNames(styles.selectInner, styles.placeholder)}
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
        <DropdownList data={items} onChange={onSelectListItem} />
      </CSSTransition>
    </div>
  )
}

export { Select }
