import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {
    const {
        cartUsecases: { addToCartUsecase }
    } = dependencie;


    const addToCart = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const cart = await addToCartUsecase(dependencie).interactor(req.body);

            if (!cart) {
                throw new Error("Add product to cart failed!");
            }

            res.status(201).json({
                success: true,
                data: cart,
                message: "Product added to cart!"
            });
        } catch (error: any) {
            next(error);
        }
    }

    return addToCart;
}