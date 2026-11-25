import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LangProvider } from './lib/i18n.jsx'
import { A11yProvider } from './lib/a11y.jsx'
import './styles/global.css'
import './styles/a11y.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <A11yProvider>
        <App />
      </A11yProvider>
    </LangProvider>
  </StrictMode>
)
