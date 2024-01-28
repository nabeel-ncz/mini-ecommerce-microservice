import { ISubscriber } from "@nabeelshop/common";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import userUpdatedConsumer from "./consumers/userUpdatedConsumer";
import productCreatedConsumer from "./consumers/productCreatedConsumer";
import productUpdatedConsumer from "./consumers/productUpdatedConsumer";

export interface ICartSubscriber extends Pick
    <
        ISubscriber,
        'productCreated' | 'productUpdated' | 'userCreated' | 'userUpdated'
    > { }


export const createSubscriber = (): ICartSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userUpdated: userUpdatedConsumer,
        productCreated: productCreatedConsumer,
        productUpdated: productUpdatedConsumer
    }
}