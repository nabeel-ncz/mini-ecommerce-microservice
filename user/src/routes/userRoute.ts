import { Router } from "express";
import { userController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import { isBlockedUser } from "../handlers/middlewares/checkBlockedUser";
import {
    setCurrentUser,
    requireAuth
} from "@nabeelshop/common";

const router: Router = Router();

const {
    updateProfileController,
    currentUserController
} = userController(dependencies);

router.route('/api/users')
    .put(setCurrentUser, requireAuth, isBlockedUser, updateProfileController)
    .get(setCurrentUser, requireAuth, isBlockedUser, currentUserController);

export default router;
