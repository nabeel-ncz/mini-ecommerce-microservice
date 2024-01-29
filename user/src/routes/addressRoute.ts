import { Router } from "express";
import { addressController } from "../handlers/controllers";
import * as dependencies from "../config/dependencies";
import {
    setCurrentUser,
    requireAuth,
    checkBlockedUser
} from "@nabeelshop/common";

const router: Router = Router();

const {
    addAddressController,
    deleteAddressController
} = addressController(dependencies);

router.route('/api/address')
    .post(setCurrentUser, requireAuth, checkBlockedUser, addAddressController)

router.route('/api/address/:id')
    .delete(setCurrentUser, requireAuth, checkBlockedUser, deleteAddressController);

export default router;
