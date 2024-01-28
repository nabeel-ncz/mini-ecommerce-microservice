import { Consumer } from "kafkajs";
import { kafka } from "./index";
import { createSubscriber, IAdminSubscriber } from "./subscriber";
import { ADMIN_SERVICE_TOPIC } from "@nabeelshop/common";

const consumer: Consumer = kafka.consumer({
    groupId: String(process.env.KAFKA_CLIENT_ID),
})

export default async () => {
    try {

        await consumer.connect();
        await consumer.subscribe({
            topic: ADMIN_SERVICE_TOPIC,
            fromBeginning: true
        });

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage: async ({ message }) => {

                const { key, value } = message;

                const subscriberMethod = String(key) as keyof IAdminSubscriber;
                const subscriberData = JSON.parse(String(value));

                try {
                    await subscriber[subscriberMethod](subscriberData);
                } catch (error: any) {
                    throw new Error(error?.message);
                }

            }
        });

    } catch (error: any) {
        console.error('kafka consume error : ', error?.message);
    } finally {
        consumer.disconnect();
    }
}
