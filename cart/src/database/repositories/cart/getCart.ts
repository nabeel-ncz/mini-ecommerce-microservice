import { Cart } from "../../models/cart";

export const getCartProducts = async (
    userId: string,
) => {
    try {
        const cart = await Cart
            .findOne({ userId: userId })
            .populate("items.productId")
            .exec();

        return cart
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


