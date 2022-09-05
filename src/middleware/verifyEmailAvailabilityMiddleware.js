import users from "../database"


const VerifyEmailAvailabilityMiddleware = (request, response, next) => {
    const {email} = request.body
    
    const emailAlredyExists = users.find(user => user.email === email)

    if(emailAlredyExists){
        return response.status(400).json({message:"This email is alredy taken."})
    }
    next()
}
export default VerifyEmailAvailabilityMiddleware