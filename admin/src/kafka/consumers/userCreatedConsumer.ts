import { createUser } from "../../database/repositories/user/createUser";

export default async (
    data: {
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