import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@styles/index.scss'

import App from './components/App'

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
