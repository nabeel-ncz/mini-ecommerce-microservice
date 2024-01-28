import { Producer } from "kafkajs";
import { kafka } from "../index";
import { ObjectId } from "mongoose";
import {
    USER_SERVICE_TOPIC,
    ADMIN_SERVICE_TOPIC,
    CART_SERVICE_TOPIC,
    USER_CREATED_MESSAGE
} from "@nabeelshop/common";

const producer: Producer = kafka.producer();

export default async (
    data: {
        _id: ObjectId;
        name: string;
        email: string,
        password: string;
        isAdmin: boolean;
        isBlocked: boolean;
    }
) => {
    try {
        await producer.connect();

        const messages = [
            {
                topic: USER_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: ADMIN_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: CART_SERVICE_TOPIC,
                messages: [{
                    key: USER_CREATED_MESSAGE,
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