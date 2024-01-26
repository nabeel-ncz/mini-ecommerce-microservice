import { Types } from "mongoose";

export interface ProductEntity{
    _id?: Types.ObjectId;
    title: string;
    stock: number;
    description: string;
    image: string;
    price: number;
    isBlocked: boolean;
}