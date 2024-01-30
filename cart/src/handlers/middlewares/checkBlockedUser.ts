import { Request, Response, NextFunction } from "express";
import { User } from "../../database/models/user";

export const isBlockedUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        if(req.user?.isBlocked){
            throw new Error("You are blocked from the site!");
        }

        const user = await User.findById(req.user?.userId)

        if(user?.isBlocked){
            throw new Error("You are blocked from the site!");
        }

        next();
        
    } catch (error: any) {
        next(error);
    }
}
