import { Router } from "express";
import { authController } from "../handlers/controllers";
import { setCurrentUser } from "@nabeelshop/common"
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    loginController,
    signupController,
    currentUserController,
    logoutController
} = authController(dependencies);

router.route('/signup').post(signupController);
router.route('/login').post(loginController);
router.route('/logout').delete(logoutController)
router.route('/current').get(setCurrentUser, currentUserController);

export default router;
