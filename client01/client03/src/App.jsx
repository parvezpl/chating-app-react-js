import { useState, useMemo, useEffect } from 'react'
import './App.css'
import { socket } from './../logic/ConnectioPro';
import List1 from './../componnent/list/List1';
import { useSelector } from 'react-redux';

function App() {
  const [socketid, setSocketid] = useState("")
  const [sms, setSms] = useState("")
  const [data, seData] = useState("hello")
  const [status, setStatus] = useState(false)
  const [ipad, setIpad] = useState("")

  useEffect(() => {
    socket.on("connect", () => {
      setSocketid(socket.id),
        console.log("connect with socket id", socket.id)
    })
  }, [])

  useEffect(() => {
    socket.emit("new", sms)
    socket.emit("id", ipad)

  }, [sms, ipad])

  useEffect(() => {
    socket.on("new", (data) => {
      seData(data)
    })
    socket.on("spacial", (data) => {
      seData(data)
    })
    socket.on("idstatus", (data) => {
      setStatus(data)
    })


  }, [])

// define redux api..........
  const socketIdonclick= useSelector((state)=>state.socket1.socketId)
  const [redsocketid, setRedSocketid] = useState("")
  useEffect(()=>{
    setRedSocketid(socketIdonclick)
    setIpad(socketIdonclick)
  },[socketIdonclick])


  return (
    <>
      <div className="hello-box">
        <div className='list1'>
          <List1/>
        </div>
        <div className='hello-box1 '>
          <div className='hellotext'>
            <div className='hellotext1'>HELLO BOX</div>
          </div>
          <div className='ipbox'>
            <div className='ipadr'>
              <div >MY id Adress</div>
            </div>
            <input className='input' defaultValue={socketid} disabled />

          </div>
 
          <div className='ipbox'>
            <div className='ipadr'>
              <div >ENTER id Adress</div>
            </div>
            <input className='input' onChange={(e) => setIpad(e.target.value)} placeholder={redsocketid} defaultValue={redsocketid}/>
          </div>
          <div className='status'>
            <div className='writesome' style={{ color: status ? "green" : "red" }}> {status ? "connected" : "desconnected"}</div>
            <div className='writesome'>Write something</div>
          </div>
          <div className='writeboxmain'>
            <textarea className='writebox' onChange={(e) => { setSms(e.target.value)}} > </textarea>
            <div className='btn'>
              <div>
                <button className='btn1' >SUBMIT</button>
              </div>
            </div>

          </div>
        </div>
        <div className='data' >
          {data}
        </div>
      </div>
    </>
  )
}

export default App
