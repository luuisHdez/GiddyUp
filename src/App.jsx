import { useState } from 'react'
import GiddyUpApp from './Components/GiddyUpApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GiddyUpApp />
        <div>asdasd</div>
      </div>        
    </>
  )
}

export default App
