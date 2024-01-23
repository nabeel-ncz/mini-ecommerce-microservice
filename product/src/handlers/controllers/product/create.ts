import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        productUsecases: { createProductUsecase }
    } = dependencie;


    const createProduct = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const product = await createProductUsecase(dependencie).interactor(req.body);

            if (!product) {
                throw new Error("Product creation failed!");
            }

            res.status(201).json({
                success: true,
                data: product,
                message: "product created successfully!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return createProduct;
}