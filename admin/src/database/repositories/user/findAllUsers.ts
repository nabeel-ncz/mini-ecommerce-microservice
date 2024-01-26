import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const findAllUsers = async (
    p: number, l: number
): Promise<UserEntity[] | [] | null> => {
    try {
        const page = p || 1;
        const limit = l || 10;
        const skip = (page - 1) * limit;
        const users = await User.find().skip(skip).limit(limit);
        return users
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
