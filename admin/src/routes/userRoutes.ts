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
    getUserController,
    blockUserController,
    unblockUserController
} = userController(dependencies);

router.route('/api/admin/users/')
    .get(setCurrentUser, requireAdmin, getAllUsersController);

router.route('/api/admin/users/:id')
    .get(setCurrentUser, requireAdmin, getUserController);

router.route('/api/admin/users/:id/block')
    .put(setCurrentUser, requireAdmin, blockUserController);

router.route('/api/admin/users/:id/unblock')
    .put(setCurrentUser, requireAdmin, unblockUserController);

export default router;
