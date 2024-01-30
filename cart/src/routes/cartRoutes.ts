import { Router } from "express";
import { cartController } from "../handlers/controllers";
import { isBlockedUser } from "../handlers/middlewares/checkBlockedUser";
import * as dependencies from "../config/dependencies";
import {
    setCurrentUser,
    requireAuth,
} from "@nabeelshop/common";

const router: Router = Router();

const {
    addToCartController,
    removeFromCartController,
    getCartController
} = cartController(dependencies);


router.route('/api/cart/')
    .post(setCurrentUser, requireAuth, isBlockedUser, addToCartController)
    .delete(setCurrentUser, requireAuth, isBlockedUser, removeFromCartController);

router.route('/api/cart/:id')
    .get(setCurrentUser, requireAuth, isBlockedUser, getCartController);

export default router;
