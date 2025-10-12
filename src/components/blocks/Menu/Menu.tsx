import userpic from '@assets/images/user.webp?srcset'
import Picture from '@ui/Picture'
import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.user}>
        <Picture className={styles.userpic} image={userpic} />
        <div className={styles.username}>Имя пользователя</div>
      </div>
    </div>
  )
}

export default Menu
