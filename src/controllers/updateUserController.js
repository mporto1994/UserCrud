import UpdateUserService from "../services/updateUserService"


const UpdateUserController = (req,res) => {
    const {id} = req.params
    const {email, name, password } = req.body 

    const user = UpdateUserService(id,email,name, password)

    return res.json(user)

}

export default UpdateUserController