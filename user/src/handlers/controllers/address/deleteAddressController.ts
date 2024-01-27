import { Request, Response, NextFunction } from "express";

export default (dependencie: any) => {
    const {
        addressUsecases: { deleteAddressUsecase }
    } = dependencie;


    const deleteAddress = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params?.id;
            
            await deleteAddressUsecase(dependencie).interactor(id);
            
            res.status(204).json({});

        } catch (error: any) {
            next(error);
        }
    }

    return deleteAddress;
}