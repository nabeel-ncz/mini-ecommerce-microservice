import { Request, Response, NextFunction } from "express";
import userUpdatedProducer from "../../../kafka/producers/userUpdatedProducer";

export default (dependencie: any) => {
    const {
        userUsecases: { updateProfileUsecase }
    } = dependencie;


    const updateProfile = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.user?.userId;
            const data = req.body;
            
            const user = await updateProfileUsecase(dependencie).interactor(id, data);

            //produce update profile message
            await userUpdatedProducer({
                _id: user._id,
                name: user.name,
                email: user.email
            });
            
            res.status(200).json({
                success: true,
                data: user,
                message: "User updated!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return updateProfile;
}