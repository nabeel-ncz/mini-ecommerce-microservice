import { consumer } from "./index";
import { createSubscriber, IAuthSubscriber } from "./subscriber";
import { AUTH_SERVICE_TOPIC } from "@nabeelshop/common";

export const runConsumer = async () => {
    try {

        await consumer.connect();

        await consumer.subscribe({
            topic: AUTH_SERVICE_TOPIC,
            fromBeginning: true
        });

        const subscriber = createSubscriber();

        await consumer.run({

            eachMessage: async ({ message }) => {

                const { key, value } = message;

                const subscriberMethod = String(key) as keyof IAuthSubscriber;
                const subscriberData = JSON.parse(String(value));

                try {
                    await subscriber[subscriberMethod](subscriberData);
                } catch (error: any) {
                    throw new Error(error?.message);
                }
            }
            
        });
    } catch (error: any) {
        throw new Error("Kafka Consume Error : " + error?.message);
    }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}