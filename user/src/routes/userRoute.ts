import { Router } from "express";
import { userController } from "../handlers/controllers";
import { setCurrentUser } from "@nabeelshop/common";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    updateProfileController,
    currentUserController
} = userController(dependencies);

router.route('/api/users')
    .put(updateProfileController)
    .get(setCurrentUser, currentUserController);

export default router;
