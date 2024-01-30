import { User } from "../../models/user";
import { UserEntity } from "../../../entities";

export const unblockUser = async (
    id: string
): Promise<UserEntity | null> => {
    try {

        const user = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });

        if (!user) {
            throw new Error("User does not exist!");
        }

        return user;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
