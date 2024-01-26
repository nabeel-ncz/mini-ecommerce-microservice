import { Product } from "../../index";
import { ProductEntity } from "../../../entities";

export const findAll = async (
    p: number, l: number
): Promise<ProductEntity[] | [] | null> => {
    try {

        const page = p || 1;
        const limit = l || 10;
        const skip = (page - 1) * limit;

        const products = await Product.find({
            isBlocked: false
        }).skip(skip).limit(limit);
        
        return products
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
