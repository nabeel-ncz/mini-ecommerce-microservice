import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        productUsecases: { findAllProductUsecase }
    } = dependencie;


    const getAllProducts = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const page = req.query?.page;
            const limit = req.query?.limit;

            const products = findAllProductUsecase(dependencie).interactor(page, limit);

            res.status(200).json({
                success: true,
                data: products,
                message: "products data retrieved!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return getAllProducts;
}