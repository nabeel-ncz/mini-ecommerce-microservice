import mongoose from "mongoose";
export default async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log('Admin service Database connected');
    } catch (error: any) {
        console.log(error?.message);
        throw new Error("Admin service Database connection failed!");
    }
}