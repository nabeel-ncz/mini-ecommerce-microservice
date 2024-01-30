import { Request, Response, NextFunction } from "express";
import { User } from "../../database/models/user";

export const isBlockedUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {

        const { email } = req.body;

        if (!email) {
            throw new Error("There is something went wrong");
        }

        const user = await User.findOne({ email: req.body?.email });

        if (user?.isBlocked) {
            throw new Error("You are blocked from the site!");
        }

        next();

    } catch (error: any) {
        next(error);
    }
}
