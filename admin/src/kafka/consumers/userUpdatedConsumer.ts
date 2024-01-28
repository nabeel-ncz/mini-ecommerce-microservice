import { updateUser } from "../../database/repositories/user/updateUser";
import { Types } from "mongoose";

export default async (
    data: {
        _id: Types.ObjectId,
        name: string;
        email: string
    }
) => {
    
    try{
        await updateUser(data);

        console.log("==========");
        console.log("user-updated-consumed admin-service");
        console.log("==========");

    } catch (error: any){
        console.log("user-updated admin-service error: ",error?.message);
    }

}