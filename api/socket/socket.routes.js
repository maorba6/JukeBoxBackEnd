const express = require('express')
const { io } = require('../../server');
const boxService = require('../box/box.service')
const router = express.Router()


io.on('connection',(socket)=>{
    console.log('connected ',socket.id);

    socket.emit('get data')
    socket.on('got data', data =>{
        socket.join(data.id)
        io.to(data.id).emit('user joined',data.user.username)
        socket.on('typing',(box, user)=>{
            io.to(box._id,).emit('user is typing',user)
        })
    })
    socket.on('sendMsg',async (data) =>{
        box = data.currBox
        // box.chat.push(data.message)
        // await boxService.update(box)
        io.to(box._id).emit('msgSent',box)
    })
    
})




module.exports = router