import express from "express"
import { Server } from "socket.io"
import {createServer} from "http"

const port=3001

const app = express()
const server= createServer(app)
let socketist=[]
const io = new Server(server, {
    cors:{
        origin: "*", 
        methods: ['GET', 'POST'],
        credentials:true
    }
})

app.get('/', (req, res)=>{
    res.send("hello woosld")
})

io.on("connection", (socket)=>{
    socketist.push(socket.id)
    console.log("user Connected", socket.id, socketist)

    io.emit("socketidlist", socketist)

    socket.on('disconnect', () => {
        socketist=socketist.filter(item=> item!==socket.id)
        console.log('user disconnected', socketist);
        io.emit("socketidlist" ,socketist )
    });

    socket.on("new", (data)=>{
        console.log(data)
        // io.emit("new", data)
        socket.on("id", (id)=>{
            socket.to(id).emit("idstatus" ,true )
            socket.to(id).emit("spacial" ,data )
        })
    })

})

server.listen(port, ()=>{
    console.log(`Server listening on ${port}`);
}) 