import { ISubscriber } from "@nabeelshop/common";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import userUpdatedConsumer from "./consumers/userUpdatedConsumer";

export interface IAdminSubscriber extends Pick
    <ISubscriber, 'userCreated' | 'userUpdated'> { }


export const createSubscriber = (): IAdminSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userUpdated: userUpdatedConsumer
    }
}