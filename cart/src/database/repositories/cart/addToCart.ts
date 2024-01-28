import { Cart } from "../../models/cart";
import { CartEntity } from "../../../entities";
import { ObjectId } from "mongoose";

export const addToCart = async (
    data: {
        userId: ObjectId,
        productId: ObjectId,
        quantity: number
    }
): Promise<CartEntity | null> => {
    try {
        const existingCart = await Cart.findOne({ userId: data.userId });

        if (!existingCart) {

            const newCart = await Cart.create({
                userId: data.userId,
                items: [
                    {
                        productId: data.productId,
                        quantity: data.quantity
                    }
                ]
            });

            if (!newCart) {
                throw new Error("Add product to cart failed!");
            }

            return newCart as CartEntity;
        }

        await existingCart?.updateOne({
            $push: {
                items: {
                    productId: data.productId,
                    quantity: data.quantity
                }
            }
        });

        const updatedCart = await existingCart?.save();

        return updatedCart as CartEntity;
    
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


