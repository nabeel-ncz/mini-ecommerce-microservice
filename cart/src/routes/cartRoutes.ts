import { Router } from "express";
import { cartController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    addToCartController,
    removeFromCartController,
    getCartController
} = cartController(dependencies);


router.route('/api/cart/')
    .post(addToCartController)
    .delete(removeFromCartController);

router.route('/api/cart/:id')
    .get(getCartController);

export default router;
