import { Types } from "mongoose";

export interface ProductEntity{
    _id?: Types.ObjectId;
    title: String;
    description: String,
    image: String,
    price: Number;
}