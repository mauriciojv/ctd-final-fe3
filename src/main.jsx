import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import  Context  from './Components/utils/global.context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Context>
      <App></App>
     </Context>
      

    </BrowserRouter>
    
  </React.StrictMode>,
)
