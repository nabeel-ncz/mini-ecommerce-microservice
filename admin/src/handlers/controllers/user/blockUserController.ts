import { Request, Response, NextFunction } from "express";
import { userBlockedProducer } from "../../../kafka/producers/userBlockedProducer";

export default (dependencie: any) => {

    const {
        userUsecases: { blockUserUsecase }
    } = dependencie;


    const blockUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const id = req.params?.id;

            const user = await blockUserUsecase(dependencie).interactor(id);

            //produce blocked user message
            await userBlockedProducer({
                _id: user._id,
                email: user.email,
                isBlocked: user.isBlocked
            });

            res.status(200).json({
                success: true,
                data: user,
                message: "user blocked!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return blockUser;
}