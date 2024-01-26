import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        productUsecases: { findAllProductsUsecase }
    } = dependencie;


    const getAllProductsController = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const page = req.query?.page;
            const limit = req.query?.limit;

            const products = await findAllProductsUsecase(dependencie).interactor(page, limit);

            res.status(200).json({
                success: true,
                data: products,
                message: "products data retrieved!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return getAllProductsController;
}