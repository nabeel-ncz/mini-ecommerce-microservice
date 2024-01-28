import { Cart } from "../../models/cart";
import { CartEntity } from "../../../entities";
import { ObjectId } from "mongoose";

export const removeFromCart = async (
    data: {
        userId: ObjectId,
        productId: ObjectId
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

        return updatedCart;
    
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
