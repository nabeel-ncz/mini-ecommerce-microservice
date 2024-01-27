import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const updateProfile = async (
    id: string, data: UserEntity
): Promise<UserEntity | null> => {
    try {

        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: { ...data }
        })

        if (!updatedUser) {
            throw new Error("Profile updation failed!");
        }

        return updatedUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


