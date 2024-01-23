import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    createProductController,
    updateProductController,
    findAllProductsController
} = productController(dependencies);

router.route('/')
    .get(findAllProductsController)
    .post(createProductController)
    .put(updateProductController);

export default router;
