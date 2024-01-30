import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const updateProfile = async (
    id: string,
    data: { name: string, email: string }
): Promise<UserEntity | null> => {
    try {

        const updatedUser = await User.findByIdAndUpdate(id, {
            name: data.name,
            email: data.email
        }, {
            new: true
        });

        if (!updatedUser) {
            throw new Error("Profile updation failed!");
        }

        return updatedUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


