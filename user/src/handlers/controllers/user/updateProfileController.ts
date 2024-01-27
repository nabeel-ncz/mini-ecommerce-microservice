import { Request, Response, NextFunction } from "express";

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
            const data = req.body;
            
            const user = await updateProfileUsecase(dependencie).interactor(data);
            
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