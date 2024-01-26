import { Product } from "../../models/product";
import { ProductEntity } from "../../../entities";

export const findProduct = async (
    id: string
): Promise<ProductEntity | null> => {
    try {

        const product = await Product.findById(id);

        if (!product) {
            throw new Error("Product not available!");
        }
        
        return product
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
