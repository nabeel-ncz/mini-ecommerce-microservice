import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {

    const {
        productUsecases: { updateProductUsecase }
    } = dependencie;


    const updateProduct = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {

            const product = await updateProductUsecase(dependencie).interactor(req.body);

            if (!product) {
                throw new Error("Product updation failed!");
            }

            res.status(200).json({
                success: true,
                data: product,
                message: "product updated successfully!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return updateProduct;
}