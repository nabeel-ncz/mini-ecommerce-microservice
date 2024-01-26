import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const findUser = async (
    id: string
): Promise<UserEntity | null> => {
    try {

        const user = await User.findById(id);

        if (!user) {
            throw new Error("User does not exist!");
        }
        
        return user
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
