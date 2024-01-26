import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICartSchema extends Document {
    userId: Types.ObjectId;
    items: {
        productId: Types.ObjectId,
        quantity: Number
    }[];
}

const CartSchema: Schema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
    },
    items: [
        {
            productId: {
                type: Types.ObjectId,
                ref: "products",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

export const Cart = mongoose.model<ICartSchema>("carts", CartSchema);

