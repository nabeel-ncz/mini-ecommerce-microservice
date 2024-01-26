import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        productUsecases: { findProductUsecase }
    } = dependencie;


    const getProductController = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const productId = req.params?.id;

            const product = await findProductUsecase(dependencie).interactor(productId);

            res.status(200).json({
                success: true,
                data: product,
                message: "product data retrieved!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return getProductController;
}