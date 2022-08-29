import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Padre } from './components/Padre'
// import { Test } from './components/test'

import { TodoApp } from './hooks/reducer/TodoApp'

import './styles.css';
// import { FormWithCustomHook } from './components/FormWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode> 
)
