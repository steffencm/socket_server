"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var repository_1 = require("./repository");
exports.registerHandlers = function (socket) {
    var username = '';
    socket.on('whoami', function (msg) {
        console.log(msg.username + " connected");
        username = msg.username;
        socket.emit('current_users', repository_1.getMembers().map(function (user) { return user.username; }));
        repository_1.addUser({
            socketId: socket.id,
            username: msg.username
        });
        socket.broadcast.emit('user_connected', msg.username);
    });
    socket.on('disconnect', function () {
        console.log(username + " disconnected");
        repository_1.removeUser({
            socketId: socket.id,
            username: username
        });
        socket.broadcast.emit('user_disconnected', username);
    });
};
