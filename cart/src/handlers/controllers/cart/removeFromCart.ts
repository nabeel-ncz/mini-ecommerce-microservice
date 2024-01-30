import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {
    const {
        cartUsecases: { removeFromCartUsecase }
    } = dependencie;


    const removeFromCart = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const updatedCart = await removeFromCartUsecase(dependencie).interactor(req.body);

            res.status(204).json({
                success: true,
                data: updatedCart,
                message: "Product removed from cart!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return removeFromCart;
}