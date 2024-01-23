import { Product } from "../../index";
import { ProductEntity } from "../../../entities";

export const update = async (
    details: ProductEntity
): Promise<ProductEntity | null> => {
    try {

        const product = await Product.findOne({
            _id: details._id,
        });

        if (!product) {
            throw new Error("Product does not exist!");
        }

        await product.updateOne({
            title: details.title,
            description: details.description,
            image: details.image,
            price: details.price
        });

        const newProduct = await product.save();

        return newProduct as ProductEntity;
        
    } catch (error: any) {
        throw new Error(error?.message);
    }
}