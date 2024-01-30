import { producer } from "../index";
import { ObjectId } from "mongoose";
import {
    AUTH_SERVICE_TOPIC,
    ADMIN_SERVICE_TOPIC,
    CART_SERVICE_TOPIC,
    USER_UPDATED_MESSAGE
} from "@nabeelshop/common";

export default async (
    data: {
        _id: ObjectId;
        name: string;
        email: string,
    }
) => {
    try {
        await producer.connect();

        const messages = [
            {
                topic: AUTH_SERVICE_TOPIC,
                messages: [{
                    key: USER_UPDATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: ADMIN_SERVICE_TOPIC,
                messages: [{
                    key: USER_UPDATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: CART_SERVICE_TOPIC,
                messages: [{
                    key: USER_UPDATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            }
        ]

        await producer.sendBatch({ topicMessages: messages });

    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}