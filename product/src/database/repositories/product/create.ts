import { Product } from "../../index";
import { ProductEntity } from "../../../entities";

export const create = async (
    details: ProductEntity
): Promise<ProductEntity | null> => {
    try {
        const newUser = await Product.create(details);
        if (!newUser) {
            throw new Error("Product creation failed!");
        }
        return newUser as ProductEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


