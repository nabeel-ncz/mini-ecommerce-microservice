import { User } from "../../database";
import { ObjectId } from "mongoose";

export default async (
    data: {
        _id: ObjectId;
        email: string;
        isBlocked: boolean;
    }
) => {
    
    try{

        await User.findByIdAndUpdate(data._id, {
            isBlocked: data.isBlocked
        });

        console.log("==========");
        console.log("user-unblocked-consumed auth-service");
        console.log("==========");

    } catch (error: any){
        console.log("user-unblocked auth-service error: ",error?.message);
    }

}