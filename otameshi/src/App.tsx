import { useState } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState("")
  const [selfInfo, setSelfInfo] = useState({
    firstName: "aaa",
    lastName: "bbb",
    address: "asasaasas"
  });
  console.log("レンダリングしてるよ")
  

  return (
    <>
      <input type="value" onChange={(e) => setState(e.target.value)} /><br />
      {state}

      firstName： <input type="value" onChange={(e) => setSelfInfo({
        ...selfInfo, firstName: e.target.value
      })} /><br />
      {selfInfo?.firstName}<br />
      lastName： <input type="value" onChange={(e) =>  setSelfInfo({
        firstName: selfInfo.firstName,
        lastName: e.target.value,
        address: selfInfo.address
      })} /><br />
      {selfInfo?.lastName}<br />
      address： <input type="value" onChange={(e) =>  setSelfInfo({
        firstName: selfInfo.firstName,
        lastName: selfInfo.lastName,
        address: e.target.value
      })} /><br />
      {selfInfo?.address}
    </>
  )
}

export default App
