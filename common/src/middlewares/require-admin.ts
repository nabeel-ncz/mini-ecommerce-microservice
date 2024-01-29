import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { AdminRequiredError } from "../errors/admin-required-error";

export const requireAdmin = (
    req: Request, 
    res: Response,
    next: NextFunction
) => {

    if(!req.user){
        throw new NotAuthorizedError();
    }
    
    if(!req.user?.isAdmin){
        throw new AdminRequiredError();
    }
    
    next();
}