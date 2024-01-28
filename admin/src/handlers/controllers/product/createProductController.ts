import { Request, Response, NextFunction } from "express";
import { productCreatedProducer } from "../../../kafka/producers/productCreatedProducer";

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

            const product = await createProductUsecase(dependencie).interactor({
                image: image,
                ...data
            });

            //produce-message============
            await productCreatedProducer(product);

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