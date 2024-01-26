import { Request, Response, NextFunction } from "express";

export default () => {

    const logout = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            
            res.cookie("auth", "", {maxAge:1});
            res.status(204).json({});

        } catch (error: any) {
            next(error);
        }
    }

    return logout;
}