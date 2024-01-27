import { Router } from "express";
import { addressController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";

const router: Router = Router();

const {
    addAddressController,
    deleteAddressController
} = addressController(dependencies);

router.route('/api/address')
    .post(addAddressController)

router.route('/api/address/:id')
    .delete(deleteAddressController);

export default router;
