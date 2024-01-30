import { Request, Response, NextFunction } from "express";
import { userUnBlockedProducer } from "../../../kafka/producers/userUnblockedProducer";

export default (dependencie: any) => {

    const {
        userUsecases: { unblockUserUsecase }
    } = dependencie;


    const blockUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const id = req.params?.id;

            const user = await unblockUserUsecase(dependencie).interactor(id);

            //produce user-unblocked message
            await userUnBlockedProducer({
                _id: user._id,
                email: user.email,
                isBlocked: user.isBlocked
            });

            res.status(200).json({
                success: true,
                data: user,
                message: "user un-blocked!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return blockUser;
}