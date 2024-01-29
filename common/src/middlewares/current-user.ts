import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


interface UserPayload {
    userId: string;
    userEmail: string;
    isAdmin: boolean;
    isBlocked: boolean;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload
        }
    }
}

export const setCurrentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.cookies.auth) {
        return next();
    }
    try {
        
        const payload = jwt.verify(
            req.cookies.auth,
            process.env.AUTH_JWT_SECRET!
        ) as UserPayload; 

        req.user = payload;
        
    } catch (error) {
        next();
    }
    next();
}