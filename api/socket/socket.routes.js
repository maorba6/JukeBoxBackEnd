const express = require('express')
const { io } = require('../../server');
const boxService = require('../box/box.service')
const router = express.Router()
console.log(' socket routes');

io.on('connection',(socket)=>{
    console.log('io connect ',socket.id);
    socket.on('sendMsg',async (data) =>{
        box = data.currBox
        box.chat.push(data.message)
        await boxService.update(box)
        io.emit('msgSent')
    })
    socket.on('typing',(box, user)=>{
        
    })
})





module.exports = router