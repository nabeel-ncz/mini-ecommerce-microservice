import { createUser } from "../../database/repositories/user/createUser";
import { ObjectId } from "mongoose";

export default async (
    data: {
        _id: ObjectId,
        name: string;
        email: string,
        password: string;
        isAdmin: boolean;
        isBlocked: boolean;
    }
) => {
    
    try{
        await createUser(data);

        console.log("==========");
        console.log("user-created-consumed admin-service");
        console.log("==========");

    } catch (error: any){
        console.log("user-created admin-service error: ",error?.message);
    }

}