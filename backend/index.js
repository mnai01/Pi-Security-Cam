const express = require("express");
const { Socket } = require("socket.io");
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cv2 = require('opencv4nodejs')

// const server = require('http').Server(app)

// Init middleware
app.use(express.json({extended:false}));

// app.use('/',(req,res)=>res.send('API RUNNING'));
app.use('/', require('./routes/api/video'));

const PORT = process.env.PORT || 5000;


setInterval(()=>{
    // socket.io here
})

server.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
