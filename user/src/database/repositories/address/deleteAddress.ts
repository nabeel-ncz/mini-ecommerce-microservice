import { Address } from "../../models/address";

export const deleteAddress = async (
    id: string, 
): Promise<void> => {
    try {
        await Address.findByIdAndDelete(id);
        return;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
