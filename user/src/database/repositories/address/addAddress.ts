import { Address } from "../../models/address";
import { AddressEntity } from "../../../entities";

export const addAddress = async (
    data: AddressEntity, 
): Promise<AddressEntity | null> => {
    try {

        const createdAddress = await Address.create(data);

        if (!createdAddress) {
            throw new Error("Address creation failed!");
        }

        return createdAddress as AddressEntity;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
