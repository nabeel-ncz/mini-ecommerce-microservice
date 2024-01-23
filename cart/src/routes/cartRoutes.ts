import { Router } from "express";
import { cartController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    addToCartController,
    removeFromCartController
} = cartController(dependencies);


router.route('/')
    .post(addToCartController)
    .delete(removeFromCartController);

export default router;
