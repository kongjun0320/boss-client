import io from 'socket.io-client'
//连接服务器
const socket = io('ws://localhost:5000')
//发送数据
socket.emit('sendMsg',{name:'kb',age:123})
//接受服务端发送的消息
socket.on('receiveMsg',function(data){
    console.log(data)
})