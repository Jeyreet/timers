import { Navigate, Route, Routes } from 'react-router-dom'
import styles from './Content.module.scss'

const Content = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/home" element={<div>Home page</div>} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/timers" element={<div>Timers page</div>} />
        <Route path="/settings" element={<div>Settings page</div>} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  )
}

export default Content
