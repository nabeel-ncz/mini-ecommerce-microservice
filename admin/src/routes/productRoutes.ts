import { Router } from "express";
import { productController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import { upload } from "../utils/multer/singleFileUpload";
import {
    setCurrentUser,
    requireAdmin
} from "@nabeelshop/common";

const router: Router = Router();

const {
    createProductController,
    updateProductController,
    getAllProductController,
    getProductController
} = productController(dependencies);

router.route('/api/admin/products/')
    .get(setCurrentUser, requireAdmin, getAllProductController)
    .post(setCurrentUser, requireAdmin, upload.single('file'), createProductController)

router.route('/api/admin/products/:id')
    .get(setCurrentUser, requireAdmin, getProductController)
    .put(setCurrentUser, requireAdmin, upload.single('file'), updateProductController)

export default router;
