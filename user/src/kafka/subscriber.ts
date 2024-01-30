import { ISubscriber } from "@nabeelshop/common";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import userUpdatedConsumer from "./consumers/userUpdatedConsumer";
import userBlockedConsumer from "./consumers/userBlockedConsumer";
import userUnBlockedConsumer from "./consumers/userUnBlockedConsumer";

export interface IUserSubscriber extends Pick
    <
        ISubscriber,
        'userCreated' | 'userUpdated' | 'userBlocked' | 'userUnBlocked'
    > { }


export const createSubscriber = (): IUserSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        userUpdated: userUpdatedConsumer,
        userBlocked: userBlockedConsumer,
        userUnBlocked: userUnBlockedConsumer
    }
}