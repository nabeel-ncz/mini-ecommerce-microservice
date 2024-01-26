import { Router } from "express";
import { userController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    getAllUsersController,
    getUserController
} = userController(dependencies);

router.route('/api/admin/users/').get(getAllUsersController);
router.route('/api/admin/users/:id').get(getUserController);

export default router;
