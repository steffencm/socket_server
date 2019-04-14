
type User = {
    username: string,
    socketId: string,
}

let members: User[] = []

export function addUser(user){
    members = members.concat(user)
}

export function removeUser(user: User) {
    const index = members.findIndex(
        (existingUser) => existingUser.socketId === user.socketId
    )
    if(index > -1) {
        members.splice(index, 1)
        members = members.slice()
    } 
}

export function getMembers(){
    return members
}
