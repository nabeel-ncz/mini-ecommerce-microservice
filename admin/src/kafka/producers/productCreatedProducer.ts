import { producer } from "../index";
import { PRODUCT_SERVICE_TOPIC, PRODUCT_CREATED_MESSAGE } from "@nabeelshop/common";

export default async (
    data: { 
        id: string;
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

        await producer.send({
            topic: PRODUCT_SERVICE_TOPIC,
            messages: [
                {
                    key: PRODUCT_CREATED_MESSAGE,
                    value: JSON.stringify(data)
                }
            ]
        })
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}