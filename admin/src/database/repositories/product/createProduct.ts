import { Product } from "../../models/product";
import { ProductEntity } from "../../../entities";

export const createProduct = async (
    data: ProductEntity
): Promise<ProductEntity | null> => {
    try {
        const newProduct = await Product.create(data);
        if (!newProduct) {
            throw new Error("Product creation failed!");
        }
        return newProduct as ProductEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


