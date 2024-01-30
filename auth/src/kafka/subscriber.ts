import { ISubscriber } from "@nabeelshop/common";
import userBlockedConsumer from "./consumers/userBlockedConsumer";
import userUnBlockedConsumer from "./consumers/userUnBlockedConsumer";

export interface IAuthSubscriber extends Pick
    <ISubscriber, 'userBlocked' | 'userUnBlocked'> { }


export const createSubscriber = (): IAuthSubscriber => {
    return {
        userBlocked: userBlockedConsumer,
        userUnBlocked: userUnBlockedConsumer
    }
}