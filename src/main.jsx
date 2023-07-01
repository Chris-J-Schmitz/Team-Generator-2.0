import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'tailwindcss/tailwind.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=" h-screen bg-black">
      <App />
    </div>

    
  </React.StrictMode>,
)
