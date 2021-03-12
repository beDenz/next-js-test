import styles from './addNew.module.scss'

export type AddNewCardProps = {
  onClick: () => void
}

const AddNewCard: React.FC<AddNewCardProps> = ({ onClick }) => {
  return (
    <div className={styles.addNewCard} onClick={onClick}>
      <span className={styles.addNewCardText}>Add New</span>
    </div>
  )
}

export { AddNewCard }
