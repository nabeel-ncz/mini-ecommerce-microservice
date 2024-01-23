import { User } from "../../index";
import { UserEntity } from "../../../entities";

export const create = async (
    credentials: UserEntity
): Promise<UserEntity | null> => {
    try {
        const newUser = await User.create(credentials);
        if (!newUser) {
            throw new Error("User creation failed!");
        }
        return newUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}


