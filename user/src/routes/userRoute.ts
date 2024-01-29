import { Router } from "express";
import { userController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import {
    setCurrentUser,
    requireAuth,
    checkBlockedUser
} from "@nabeelshop/common";

const router: Router = Router();

const {
    updateProfileController,
    currentUserController
} = userController(dependencies);

router.route('/api/users')
    .put(setCurrentUser, requireAuth, checkBlockedUser, updateProfileController)
    .get(setCurrentUser, requireAuth, checkBlockedUser, currentUserController);

export default router;
