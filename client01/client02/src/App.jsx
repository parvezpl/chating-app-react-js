import { useEffect, useMemo, useState } from 'react'
import {io} from "socket.io-client"


function App() {
  const [socketid, setSocketid] = useState("")
  const [sms, setSms] = useState("")
  const [data, seData] = useState("")

  const socket = useMemo(()=>io("http://localhost:3001"),[])
  useEffect(()=>{
    socket.on("connect", ()=>{
      setSocketid(socket.id),
      console.log("connect with socket id", socket.id)
    })
  },[])
  
  useEffect(()=>{
    socket.emit("new",sms)
  },[sms])

  useEffect(()=>{
    socket.on("new", (data)=>{
      // console.log("socketon", data)
      seData(data)
    })
  },[])

  // console.log("data",sms)
  return (
    < >
      <div >
        <div>{socketid}</div>
        <input
        value={data}
        onChange={(e)=>setSms(e.target.value)}
        />
      </div>
    </>
  )
}

export default App
