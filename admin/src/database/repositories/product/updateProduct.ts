import { Product } from "../../models/product";
import { ProductEntity } from "../../../entities";

export const updateProduct = async (
    id: string, data: ProductEntity
) => {
    try {

        const updated = await Product.findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                stock: data.stock,
                isBlocked: data.isBlocked,
                price: data.price,
                image: data.image
            }
        }, { new: true });

        if (!updated) {
            throw new Error("Product updated failed!");
        }

        return updated
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
