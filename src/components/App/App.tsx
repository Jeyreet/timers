import Content from '@blocks/Content'
import Menu from '@blocks/Menu'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <Content />
    </div>
  )
}

export default App
