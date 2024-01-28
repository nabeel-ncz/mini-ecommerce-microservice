import { ISubscriber } from "@nabeelshop/common";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import userUpdatedConsumer from "./consumers/userUpdatedConsumer";

export interface IUserSubscriber extends Pick
    <
        ISubscriber,
        'userCreated' | 'userUpdated'
    > { }


export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userUpdated: userUpdatedConsumer,
    }
}