import { ISubscriber } from "@nabeelshop/common";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import userUpdatedConsumer from "./consumers/userUpdatedConsumer";
import productCreatedConsumer from "./consumers/productCreatedConsumer";
import productUpdatedConsumer from "./consumers/productUpdatedConsumer";
import userBlockedConsumer from "./consumers/userBlockedConsumer";
import userUnBlockedConsumer from "./consumers/userUnBlockedConsumer";

export interface ICartSubscriber extends Pick
    <
        ISubscriber,
        'productCreated' | 'productUpdated' | 'userCreated' | 'userUpdated' | 'userBlocked' | 'userUnBlocked'
    > { }


export const createSubscriber = (): ICartSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userUpdated: userUpdatedConsumer,
        productCreated: productCreatedConsumer,
        productUpdated: productUpdatedConsumer,
        userBlocked: userBlockedConsumer,
        userUnBlocked: userUnBlockedConsumer
    }
}