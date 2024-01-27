import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {
    const {
        addressUsecases: { addAddressUsecase }
    } = dependencie;


    const addAddress = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const data = req.body;
            
            const result = await addAddressUsecase(dependencie).interactor(data);
            
            res.status(201).json({
                success: true,
                data: result,
                message: "Address created!"
            });

        } catch (error: any) {
            next(error);
        }
    }

    return addAddress;
}