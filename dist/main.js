"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var socketIo = require("socket.io");
var http_1 = require("http");
var socket_controller_1 = require("./socket_controller");
var app = express();
var http = http_1.createServer(app);
var io = socketIo();
io.on('connection', function (socket) {
    socket_controller_1.registerHandlers(socket);
});
io.listen('50824');
app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});
http.listen(50283, function () {
    console.log('listening on *:50823');
});
