import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className="text-center">Todos</h1>
      <AddTodo />
      <Todos />
      <div className="learn-about">Learn about Redux Toolkit</div>
    </>
  )
}

export default App