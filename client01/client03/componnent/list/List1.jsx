import React, { useEffect, useState } from 'react'
import { socket } from '../../logic/ConnectioPro'
import "./List1.css"
import { useDispatch, useSelector } from 'react-redux'
import { socketIdClick } from '../../store/counterSlice'
function List1() {
  const [socketidlist, setSocketidlist] = useState([])


  useEffect(()=>{
    socket.on("socketidlist", (list)=>{
      setSocketidlist([])
      setSocketidlist(list)
    })
  },[socketidlist])

  const refres =()=>{
    console.log("hello", socketidlist )
    socket.on("socketidlist", (list)=>{
      setSocketidlist(list)
    })
  }
// redux deffine ...............
  const dispactch = useDispatch()
  const socketIdonclick= useSelector((state)=>state.socketId)

  return (
    <div className='list1main' >
      {
      socketidlist.map(socketitem=>
        <div className='socketid' id={socketitem} onClick={()=>dispactch(socketIdClick(socketitem))} >{socketitem}</div>
      )
      }
      <div onClick={()=>refres()}>refres</div>
    </div>
  )
}

export default List1