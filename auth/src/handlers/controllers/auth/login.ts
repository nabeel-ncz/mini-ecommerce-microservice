import { Request, Response, NextFunction } from "express";
import { compare } from "bcrypt";
import generateToken from "../../../utils/jwt/generateToken";

export default (dependencie: any) => {
    const {
        authUsecases: { findByEmailUsecase }
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

            const token = generateToken({userId: user._id, userEmail: user.email});

            res.cookie("auth", token, {
                maxAge: 1000*60*60*24,
                httpOnly: true
            });

            res.status(201).json({
                success: true,
                data: user,
                message: "User logged-in!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return loginUser;
}