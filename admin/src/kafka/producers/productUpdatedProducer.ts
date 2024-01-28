import { producer } from "../index";
import {
    CART_SERVICE_TOPIC,
    PRODUCT_SERVICE_TOPIC,
    PRODUCT_CREATED_MESSAGE
} from "@nabeelshop/common";

export const productUpdatedProducer = async (
    data: {
        _id: string;
        title: string;
        stock: number;
        description: string;
        image: string;
        price: number;
        isBlocked: boolean;
    }
) => {
    try {

        await producer.connect();

        const messages = [
            {
                topic: PRODUCT_SERVICE_TOPIC,
                messages: [{
                    key: PRODUCT_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }]
            },
            {
                topic: CART_SERVICE_TOPIC,
                messages: [{
                    key: PRODUCT_CREATED_MESSAGE,
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