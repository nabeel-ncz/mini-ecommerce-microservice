import mongoose from "mongoose";
export default async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('Auth service Database connected');
    } catch (error: any) {
        console.log(error?.message);
        throw new Error("Auth service Database connection failed!");
    }
}