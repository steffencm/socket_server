"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var members = [];
function addUser(user) {
    members = members.concat(user);
}
exports.addUser = addUser;
function removeUser(user) {
    var index = members.findIndex(function (existingUser) { return existingUser.socketId === user.socketId; });
    if (index > -1) {
        members.splice(index, 1);
        members = members.slice();
    }
}
exports.removeUser = removeUser;
function getMembers() {
    return members;
}
exports.getMembers = getMembers;
