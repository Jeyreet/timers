import { Link } from 'react-router-dom'
import Gear from '@assets/icons/gear.svg'
import userImage from '@assets/images/user.webp?srcset'
import Picture from '@ui/Picture'
import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <div className={styles.menu}>
      <Link to="/home" className={styles.item}>
        <Gear className={styles.icon} />
        <span className={styles.label}>Home</span>
      </Link>
      <Link to="/timers" className={styles.item}>
        <Gear className={styles.icon} />
        <span className={styles.label}>Timers</span>
      </Link>
      <Link to="/settings" className={styles.item}>
        <Gear className={styles.icon} />
        <span className={styles.label}>Settings</span>
      </Link>
      <div className={styles.gap} />
      <Link to="/profile" className={styles.item}>
        <span className={styles.name}>Username username</span>
        <Picture image={userImage} className={styles.icon} extraStyles={{ image: styles.image }} />
      </Link>
    </div>
  )
}

export default Menu
