import { Router } from "express";
import { cartController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import {
    setCurrentUser,
    requireAuth,
    checkBlockedUser
} from "@nabeelshop/common";

const router: Router = Router();

const {
    addToCartController,
    removeFromCartController,
    getCartController
} = cartController(dependencies);


router.route('/api/cart/')
    .post(setCurrentUser, requireAuth, checkBlockedUser, addToCartController)
    .delete(setCurrentUser, requireAuth, checkBlockedUser, removeFromCartController);

router.route('/api/cart/:id')
    .get(setCurrentUser, requireAuth, checkBlockedUser, getCartController);

export default router;
