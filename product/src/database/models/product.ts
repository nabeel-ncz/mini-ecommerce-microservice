import mongoose, { Schema, Document,   } from "mongoose";

export interface IProductsSchema extends Document {
    title: String;
    description: String,
    image: String,
    price: Number;
}

const ProductsSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

export const Product = mongoose.model<IProductsSchema>("products", ProductsSchema);

