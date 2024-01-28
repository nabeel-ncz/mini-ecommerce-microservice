import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const createUser = async (
    data: UserEntity
): Promise<UserEntity | null> => {
    try {
    
        const user = new User({
            _id: data._id,
            name: data.name,
            email: data.email,
            password: data.password,
            isBlocked: data.isBlocked,
            isAdmin: data.isAdmin,
        });

        const newUser = await user.save();

        if (!newUser) {
            throw new Error("User creation failed!");
        }
        return newUser;
    
    } catch (error: any) {
    
        throw new Error(error?.message);
    
    }
}

