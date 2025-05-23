import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-4">Gestión de Productos</h2>
      <ProductList />
    </div>
    </>
  )
}

export default App
