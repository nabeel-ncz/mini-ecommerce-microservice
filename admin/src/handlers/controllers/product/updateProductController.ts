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

            const data = req.body;

            // if(!data?.image){
            //     data.image = req.file;
            // }

            const product = updateProductUsecase(dependencie).interactor(data);

            res.status(200).json({
                success: true,
                data: product,
                message: "product updated!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return updateProduct;
}