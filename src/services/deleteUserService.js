import users from "../database"

const DeleteUserService = (userId) => {
    const user = users.find((user)=>user.id===userId)
    
    users = users.filter((user)=>user.id!==userId)

    return user
}
export default DeleteUserService