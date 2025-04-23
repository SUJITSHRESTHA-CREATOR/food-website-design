import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  

  body{
    background-color: #FCE4D8;
    color: #CDD3D5;
    min-height: 100vh;
  }


`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
