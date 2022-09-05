import jwt  from "jsonwebtoken"
import users from "../database"

const CheckTokenMiddleware = (request, response, next) => {
    let token = request.headers.authorization

    if(!token){
        response.status(401).json({message:"Missing the authorization token"})
    }


    jwt.verify(token, "SECRET_KEY",(error,decoded)=>{
        if(error){
            return response.status(401).json({message:"The token provided is invalid."})
        }
    })

    next()
}
export default CheckTokenMiddleware