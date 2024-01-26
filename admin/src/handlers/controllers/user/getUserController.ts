import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        userUsecases: { findUserUsecase }
    } = dependencie;


    const getUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const id = req.params?.id;

            const user = findUserUsecase(dependencie).interactor(id);

            res.status(200).json({
                success: true,
                data: user,
                message: "user data retrieved!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return getUser;
}