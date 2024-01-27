import mongoose, { Schema, Document, Types } from "mongoose";

export interface IAddressSchema extends Document {
    userId: Types.ObjectId,
    fullname: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
}

const AddressSchema: Schema = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: "users"
    },
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export const Address = mongoose.model<IAddressSchema>("addresses", AddressSchema);

