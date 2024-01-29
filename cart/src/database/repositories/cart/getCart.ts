import { Cart } from "../../models/cart";

export const getCart = async (
    userId: string,
) => {
    try {
        const cart = await Cart
            .findOne({ userId: userId })
            .populate("items.productId")
            .exec();

            console.log(cart)
        return cart
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


