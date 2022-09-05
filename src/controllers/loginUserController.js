import users from "../database"
import LoginUserService from "../services/loginUserService"

const LoginUserController = (req,res) =>{
    const {email, password} = req.body
    const user = LoginUserService(email,password)

    return res.json(user)
}

export default LoginUserController