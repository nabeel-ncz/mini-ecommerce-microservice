import { User } from "../../database";
import { ObjectId } from "mongoose";

export default async (
    data: {
        _id: ObjectId;
        name: string;
        email: string;
        password: string;
        isAdmin: boolean;
        isBlocked: boolean;
    }
) => {
    
    try{
        const user = new User({
            _id: data._id,
            name: data.name,
            email:data.email,
            password: data.password,
            isAdmin: data.isAdmin,
            isBlocked: data.isBlocked
        })

        await user.save();

        console.log("==========");
        console.log("user-created-consumed admin-service");
        console.log("==========");

    } catch (error: any){
        console.log("user-created admin-service error: ",error?.message);
    }

}