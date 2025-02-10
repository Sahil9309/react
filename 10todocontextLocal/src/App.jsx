import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl p-20 bg-stone-700 rounded-half font-semibold text-blue-600 text-center'>Manage your Todos</h1>
    </>
  )
}

export default App
