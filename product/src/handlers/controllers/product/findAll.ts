import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        productUsecases: { findAllProductsUsecase }
    } = dependencie;


    const findAllProducts = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const products = await findAllProductsUsecase(dependencie).interactor();

            res.status(200).json({
                success: true,
                data: products,
                message: "product data retrieved successfully!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return findAllProducts;
}