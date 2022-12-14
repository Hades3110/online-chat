const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');
const router = require('./router');


const socketIO = require('socket.io')(http,{
    cors: {
        origins: ['http://localhost:3000']
    }
});
const port = process.env.PORT || 5555;

socketIO.on('connection', socket => {
    socket.on('message', (props) => {
        socketIO.emit('message',props);
    })
    socket.on('online', ({userName}) => {
        socketIO.emit('online',{userName});
    })
})
app.use(cors());
app.use(router);



app.use(router);

http.listen(port, ()=> console.log("Task online chat is running"));

