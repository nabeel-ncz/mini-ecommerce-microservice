import { Router } from "express";
import { userController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import {
    setCurrentUser,
    requireAdmin,
} from "@nabeelshop/common";

const router: Router = Router();

const {
    getAllUsersController,
    getUserController
} = userController(dependencies);

router.route('/api/admin/users/')
    .get(setCurrentUser, requireAdmin, getAllUsersController);

router.route('/api/admin/users/:id')
    .get(setCurrentUser, requireAdmin, getUserController);

export default router;
