import CreateUserService from "../services/createUserService"


const CreateUserController = async (req,res) => {

    const { email, name, password } = req.body 

    const user = await CreateUserService(email,name, password)

    return res.json(user)

}

export default CreateUserController