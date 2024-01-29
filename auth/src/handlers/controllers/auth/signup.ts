import { Request, Response, NextFunction } from "express";
import { genSalt, hash } from "bcrypt"
import generateToken from "../../../utils/jwt/generateToken";
import userCreatedProducer from "../../../kafka/producers/userCreatedProducer";

export default (dependencie: any) => {
    const {
        authUsecases: { createUserUsecase }
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
            
            const user = await createUserUsecase(dependencie).interactor(credentials);

            //produce-user-created-event
            await userCreatedProducer(user);
            //==========================

            const token = generateToken({
                userId: user._id,
                userEmail: user.email,
                isAdmin: user.isAdmin,
                isBlocked: user.isBlocked
            });

            res.cookie("auth", token, {
                maxAge: 1000*60*60*24,
                httpOnly: true
            });
            
            res.status(201).json({
                success: true,
                data: user,
                message: "User created!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return createUser;
}