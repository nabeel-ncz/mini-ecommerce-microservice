import { Router } from "express";
import { userController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    loginController,
    signupController
} = userController(dependencies);


router.route('/signup').post(signupController);
router.route('/login').post(loginController);

export default router;
