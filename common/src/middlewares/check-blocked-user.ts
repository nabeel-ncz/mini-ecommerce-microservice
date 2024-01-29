import { Request, Response, NextFunction } from "express";
import { UserBlockedError } from "../errors/user-blocked-error";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const checkBlockedUser = (
    req: Request, 
    res: Response,
    next: NextFunction
) => {

    if(!req.user){
        throw new NotAuthorizedError();
    }
    
    if(!req.user?.isBlocked){
        throw new UserBlockedError();
    }
    
    next();
}