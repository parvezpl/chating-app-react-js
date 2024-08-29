import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HelloBox from '../componnent/HelloBox.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <HelloBox/>
    {/* <App /> */}
  </>,
)
