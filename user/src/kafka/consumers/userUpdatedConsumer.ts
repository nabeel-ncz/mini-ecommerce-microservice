import { ObjectId } from "mongoose";
import { User } from "../../database/models/user";

export default async (
    data: {
        _id: ObjectId;
        name: string;
        email: string;
        isAdmin: boolean;
        isBlocked: boolean;
    }
) => {
    
    try{
        
        await User.findByIdAndUpdate(data._id,{
            name: data.name,
            email: data.email,
            isAdmin: data.isAdmin,
            isBlocked: data.isBlocked
        });

        console.log("==========");
        console.log("user-updated-consumed cart-service");
        console.log("==========");

    } catch (error: any){
        console.log("user-updated cart-service error: ",error?.message);
    }

}