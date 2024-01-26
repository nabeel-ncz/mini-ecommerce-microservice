import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            success: false,
            error: err.serializeErrors(),
            message: err.message || "Something went wrong"
        });
    }

    res.status(400).json({
        success: false,
        error: null,
        message: "Something went wrong!"
    })

}