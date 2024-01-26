import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import { upload } from "../utils/multer/singleFileUpload";

const router: Router = Router();

const {
    createProductController,
    updateProductController,
    getAllProductController,
    getProductController
} = productController(dependencies);

router.route('/api/admin/products/')
    .get(getAllProductController)
    .post(upload.single('file'), createProductController)
    .put(upload.single('file'), updateProductController)

router.route('/api/admin/products/:id')
    .get(getProductController);

export default router;
