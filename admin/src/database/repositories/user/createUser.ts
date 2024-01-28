import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const createUser = async (
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

