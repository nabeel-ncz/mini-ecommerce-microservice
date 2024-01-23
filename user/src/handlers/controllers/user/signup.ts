import { Request, Response, NextFunction } from "express";
import { genSalt, hash } from "bcrypt"

export default (dependencie: any) => {
    const {
        userUsecases: { createUserUsecase }
    } = dependencie;


    const createUser = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const credentials = req.body;
            const salt: string = await genSalt(10);
            const hashedPassword: string = await hash(
                credentials.password, salt
            );
            credentials.password = hashedPassword;
            await createUserUsecase(dependencie).interactor(credentials);
            res.status(201).json({
                success: true,
                data: {},
                message: "User created!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return createUser;
}