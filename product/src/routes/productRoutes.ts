import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    getAllProductsController,
    getProductController
} = productController(dependencies);

router.route('/api/products/')
    .get(getAllProductsController);

router.route('/api/products/:id')
    .get(getProductController);

    
export default router;
