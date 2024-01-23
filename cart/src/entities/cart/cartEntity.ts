import { Types } from "mongoose";

export interface CartEntity{
    userId: Types.ObjectId;
    items: {
        productId: Types.ObjectId,
        quantity: Number
    }[] | [];
}
