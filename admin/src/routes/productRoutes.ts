import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    createProductController,
    updateProductController,
    getAllProductController,
    getProductController
} = productController(dependencies);

router.route('/api/admin/products/')
    .get(getAllProductController)
    .post(createProductController)
    .put(updateProductController)

router.route('/api/admin/products/:id')
    .get(getProductController);

export default router;
