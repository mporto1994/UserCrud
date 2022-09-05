import { Router} from "express";

import CreateUserController from '../controllers/createUserController';
import DeleteUserController from '../controllers/deleteUserController';
import ListUsersController from  '../controllers/listUsersController';
import LoginUserController from  "../controllers/loginUserController";
import UpdateUserController from '../controllers/updateUserController';
import CheckTokenMiddleware from "../middleware/checkTokenMiddleware";
import VerifyEmailAvailabilityMiddleware from "../middleware/verifyEmailAvailabilityMiddleware";

const router = Router()

router.post("", VerifyEmailAvailabilityMiddleware, CreateUserController)
router.post('/login', LoginUserController);
router.get('/', ListUsersController);
router.patch('/:id',CheckTokenMiddleware,VerifyEmailAvailabilityMiddleware, UpdateUserController);
router.delete('/:id',CheckTokenMiddleware, DeleteUserController);


export default router