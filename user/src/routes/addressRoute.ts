import { Router } from "express";
import { addressController } from "../handlers/controllers";
import { isBlockedUser } from "../handlers/middlewares/checkBlockedUser";
import * as dependencies from "../config/dependencies";
import {
    setCurrentUser,
    requireAuth
} from "@nabeelshop/common";

const router: Router = Router();

const {
    addAddressController,
    deleteAddressController
} = addressController(dependencies);

router.route('/api/address')
    .post(setCurrentUser, requireAuth, isBlockedUser, addAddressController)

router.route('/api/address/:id')
    .delete(setCurrentUser, requireAuth, isBlockedUser, deleteAddressController);

export default router;
