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

            const image = req?.file?.filename;
            const data = req.body;

            const product = createProductUsecase(dependencie).interactor({
                image: image,
                ...data
            });

            res.status(201).json({
                success: true,
                data: product,
                message: "product created!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return createProduct;
}