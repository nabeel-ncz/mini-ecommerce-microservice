import { Request, Response, NextFunction } from "express";
import { compare } from "bcrypt";

export default (dependencie: any) => {
    const {
        userUsecases: { findByEmailUsecase }
    } = dependencie;


    const loginUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { email, password } = req.body;
            const user = await findByEmailUsecase(dependencie).interactor(email);

            if (!user) {
                throw new Error("User doesn't exist!");
            }

            const match = await compare(password, user.password);

            if (!match) {
                throw new Error("Email or password is incorrect");
            }

            res.status(201).json({
                success: true,
                data: {},
                message: "User logged-in!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return loginUser;
}