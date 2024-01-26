import { Cart } from "../../models/cart";
import { CartEntity } from "../../../entities";
import { Types } from "mongoose";

export const removeFromCart = async (
    data: {
        userId: Types.ObjectId,
        productId: Types.ObjectId
    }
): Promise<CartEntity | null> => {
    try {
        const existingCart = await Cart.findOne({ userId: data.userId });

        if (!existingCart) {
            throw new Error("Cart doesn't exist!");
        }

        await existingCart?.updateOne({
            $pull: {
                items: {
                    productId: data.productId
                }
            }
        });

        const updatedCart = await existingCart?.save();

        return updatedCart as CartEntity;
    
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
