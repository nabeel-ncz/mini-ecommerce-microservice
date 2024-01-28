import { ISubscriber } from "@nabeelshop/common";
import productCreatedConsumer from "./consumers/productCreatedConsumer";
import productUpdatedConsumer from "./consumers/productUpdatedConsumer";

export interface IProductSubscriber extends Pick
    <
        ISubscriber,
        'productCreated' | 'productUpdated'
    > { }


export const createSubscriber = (): IProductSubscriber => {
    return {
        productCreated: productCreatedConsumer,
        productUpdated: productUpdatedConsumer
    }
}