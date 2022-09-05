import * as bcrypt from "bcryptjs"
import users from "../database"
import jwt from "jsonwebtoken"

const LoginUserService = (email, password) => {
    const user = users.find((user)=>user.email===email)

    if(!user){
        return "Login or password doesn't check out"
    }
    const passwordMatches = bcrypt.compareSync(password,user.password)

    if(!passwordMatches){
        return "Login or password doesn't check out"
    }

    const token = jwt.sign({email:email}, "SECRET_KEY", {expiresIn:"24h"})
    return token
}
export default LoginUserService