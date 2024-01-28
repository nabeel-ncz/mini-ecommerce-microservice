import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const updateUser = async (
    data: any
): Promise<UserEntity | null> => {
    try {

        const updatedUser = await User.findByIdAndUpdate(data._id, {
            $set: {
                name: data.name,
                email: data.email,
            }
        });

        if (!updatedUser) {
            throw new Error("User updation failed!");
        }

        return updatedUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
