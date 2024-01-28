import { ObjectId } from "mongoose";
import { Product } from "../../database/models/product";

export default async (
    data: {
        _id: ObjectId;
        title: string;
        stock: number;
        description: string;
        image: string;
        price: number;
        isBlocked: boolean;
    }
) => {

    try {

        await Product.findByIdAndUpdate(data._id, {
            title: data.title,
            stock: data.stock,
            description: data.description,
            image: data.image,
            price: data.price,
            isBlocked: data.isBlocked
        });

        console.log("==========");
        console.log("product-updated-consumed cart-service");
        console.log("==========");

    } catch (error: any) {
        console.log("product-updated cart-service error: ", error?.message);
    }

}