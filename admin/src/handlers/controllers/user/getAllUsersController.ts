import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        userUsecases: { findAllUsersUsecase }
    } = dependencie;


    const getAllUsers = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const page = req.query?.page;
            const limit = req.query?.limit;

            const users = findAllUsersUsecase(dependencie).interactor(page, limit);

            res.status(200).json({
                success: true,
                data: users,
                message: "users data retrieved!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return getAllUsers;
}