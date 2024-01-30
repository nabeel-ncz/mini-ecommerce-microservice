import { User } from "../../database";
import { ObjectId } from "mongoose";

export default async (
    data: {
        _id: ObjectId;
        name: string;
        email: string;
    }
) => {

    try {
        await User.findByIdAndUpdate(data._id, {
            name: data.name,
            email: data.email
        })

        console.log("==========");
        console.log("user-updated-consumed auth-service");
        console.log("==========");

    } catch (error: any) {
        console.log("user-updated auth-service error: ", error?.message);
    }

}