import { ISubscriber } from "@nabeelshop/common";
import userBlockedConsumer from "./consumers/userBlockedConsumer";
import userUnBlockedConsumer from "./consumers/userUnBlockedConsumer";
import userUpdatedConsumer from "./consumers/userUpdatedConsumer";

export interface IAuthSubscriber extends Pick
    <ISubscriber, 'userBlocked' | 'userUnBlocked' | 'userUpdated'> { }


export const createSubscriber = (): IAuthSubscriber => {
    return {
        userBlocked: userBlockedConsumer,
        userUnBlocked: userUnBlockedConsumer,
        userUpdated: userUpdatedConsumer,
    }
}