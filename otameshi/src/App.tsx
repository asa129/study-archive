import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState("")
  console.log("レンダリングしてるよ")

  return (
    <>
      <input type="value" onChange={(e) => setState(e.target.value)} /><br />
      {state}
    </>
  )
}

export default App
