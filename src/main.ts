
import * as express from 'express'
import * as socketIo from 'socket.io'
import { createServer } from 'http'
import  { registerHandlers } from './socket_controller'

const app = express()
const http = createServer(app)
const io = socketIo()

io.on('connection', (socket) => {
    registerHandlers(socket)

})

io.listen('50824')

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(50283, function(){
  console.log('listening on *:50823');
});