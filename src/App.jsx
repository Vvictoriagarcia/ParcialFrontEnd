import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card/>
        <form action="">
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </form>
     </div>
  )
}

export default App
