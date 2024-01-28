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
    
    try{

        const product = new Product({
            _id: data._id,
            title: data.title,
            stock: data.stock,
            description: data.description,
            image: data.image,
            price: data.price,
            isBlocked: data.isBlocked
        })

        await product.save();

        console.log("==========");
        console.log("product-created-consumed product-service");
        console.log("==========");

    } catch (error: any){
        console.log("product-created product-service error: ",error?.message);
    }

}