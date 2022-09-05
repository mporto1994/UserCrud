import users from "../database"
import {v4 as uuidv4} from "uuid"

const UpdateUserService = (id,email,name, password) =>{
    
    const ChangedUser = {
            email,
            name,
            password
        }

    const userPosition = users.findIndex((user)=>user.id===id)

    

    users[userPosition]={...users[userPosition], ...ChangedUser}
    
    return users[userPosition]

}   


export default UpdateUserService