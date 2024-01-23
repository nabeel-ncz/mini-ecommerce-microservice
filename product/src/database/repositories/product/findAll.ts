import { Product } from "../../index";
import { ProductEntity } from "../../../entities";

export const findAll = async (): Promise<ProductEntity[] | null> => {
    try {
        const products = await Product.find({});
        return products as ProductEntity[];
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
