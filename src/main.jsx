import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <App />
  </div>,
)
