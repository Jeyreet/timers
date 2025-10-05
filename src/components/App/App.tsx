import { type ExtraStyles } from '@types'
import c from 'clsx'

import styles from './App.module.scss'

type Props = {
  extraStyles?: ExtraStyles<typeof styles>
}

const App = ({ extraStyles = {} }: Props) => {
  return <div className={c(styles.app, extraStyles.app)}>TIMERS</div>
}

export default App
