import { ObjectId } from "mongoose";
import { User } from "../../database/models/user";

export default async (
    data: {
        _id: ObjectId;
        name: string;
        email: string;
    }
) => {
    
    try{
        
        await User.findByIdAndUpdate(data._id,{
            name: data.name,
            email: data.email
        });

        console.log("==========");
        console.log("user-updated-consumed cart-service");
        console.log("==========");

    } catch (error: any){
        console.log("user-updated cart-service error: ",error?.message);
    }

}