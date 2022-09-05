import users from "../database"
import ListUsersService from "../services/listUserService"

const ListUsersController = (req,res) => {
    users = ListUsersService()

    return res.json(users)
}
export default ListUsersController