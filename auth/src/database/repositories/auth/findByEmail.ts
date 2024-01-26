import { User } from "../../index";
import { UserEntity } from "../../../entities";

export const findByEmail = async (
    email: string
): Promise<UserEntity | null> => {
    try {
        const existingUser = await User.findOne({
            email: email
        });
        if (!existingUser) {
            throw new Error("User does not exist!");
        }
        return existingUser as UserEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}