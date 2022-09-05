import users from "../database"
import {v4 as uuidv4} from "uuid"
import * as bcrypt from "bcryptjs"

const CreateUserService = async (email,name, password) =>{
    
    const userAlredyExists = users.find((user)=>user.email===email)
    
    if(userAlredyExists){
        return "This email is alredy taken."
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = {
        email,
        name,
        password:hashedPassword,
        id:uuidv4()
    }

    users.push(newUser)

    return newUser

}   


export default CreateUserService