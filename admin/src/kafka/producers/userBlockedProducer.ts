import { producer } from "../index";
import {
    USER_SERVICE_TOPIC,
    AUTH_SERVICE_TOPIC,
    CART_SERVICE_TOPIC,
    USER_BLOCKED_MESSAGE
} from "@nabeelshop/common";

export const userBlockedProducer = async (
    data: {
        _id: string;
        email: string;
        isBlocked: boolean;
    }
) => {
    try {

        await producer.connect();

        const messages = [
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: USER_BLOCKED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: AUTH_SERVICE_TOPIC,
                messages: [{
                    key: USER_BLOCKED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: CART_SERVICE_TOPIC,
                messages: [{
                    key: USER_BLOCKED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            }
        ];

        await producer.sendBatch({ topicMessages: messages });

    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}