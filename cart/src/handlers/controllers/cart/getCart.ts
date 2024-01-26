import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {
    const {
        cartUsecases: { getCartUsecase }
    } = dependencie;


    const getCart = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const userId = req.params.id;
            const cart = await getCartUsecase(dependencie).interactor(userId);

            if (!cart) {
                throw new Error("Get cart products failed!");
            }

            res.status(200).json({
                success: true,
                data: cart,
                message: "Products retreieved from cart!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return getCart;
}