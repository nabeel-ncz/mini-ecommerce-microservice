import mongoose, { Schema, Document,   } from "mongoose";

interface IProductSchema extends mongoose.Document {
    title: string;
    stock: number;
    description: string;
    image: string;
    price: number;
    isBlocked: boolean;
}

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        isBlocked: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export const Product = mongoose.model<IProductSchema>("products", productSchema);

