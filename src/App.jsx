import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'
import FormComponent from './FormComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormComponent/>
    </div>
  )
}

export default App
