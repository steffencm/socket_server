
import { addUser, removeUser, getMembers } from './repository'

export const registerHandlers = (socket) => {

    let username = ''

    socket.on('whoami', (msg) => {
        console.log(`${msg.username} connected`)
        username = msg.username
        socket.emit('current_users', getMembers().map(
            (user) => user.username
        ))
        addUser({
            socketId: socket.id,
            username: msg.username
        })
        socket.broadcast.emit('user_connected', msg.username)
    })

    socket.on('disconnect', () => {
        console.log(`${username} disconnected`)
        removeUser({
            socketId: socket.id,
            username
        })
        socket.broadcast.emit('user_disconnected', username)
    })


}