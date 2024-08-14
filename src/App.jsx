import { useState } from 'react'
import GiddyUpApp from './Components/GiddyUpApp'
import './App.css'
import CombinedFooter from './Components/CombinedFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GiddyUpApp />
        <CombinedFooter />
      </div>        
    </>
  )
}

export default App
