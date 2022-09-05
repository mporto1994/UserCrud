import DeleteUserService from "../services/deleteUserService"

const DeleteUserController = (req,res) => {
    const {id} =req.params
    const user = DeleteUserService(id)

    return res.json(user)

}
export default DeleteUserController