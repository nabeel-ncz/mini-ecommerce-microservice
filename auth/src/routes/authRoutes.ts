import { Router } from "express";
import { authController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import { isBlockedUser } from "../handlers/middlewares/checkBlockedUser";


const router: Router = Router();

const {
    loginController,
    signupController,
    logoutController
} = authController(dependencies);

router.route('/signup').post(signupController);
router.route('/login').post(isBlockedUser, loginController);
router.route('/logout').delete(logoutController);

export default router;
