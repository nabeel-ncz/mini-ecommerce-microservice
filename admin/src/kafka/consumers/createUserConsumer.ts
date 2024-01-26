import { Consumer } from "kafkajs";
import { kafka, topic } from "..";

const consumer: Consumer = kafka.consumer({
    groupId: String(process.env.KAFKA_CONSUMER_GROUPID),
})

export const createUserConsumer = async () => {
    try {
        await consumer.connect();
        await consumer.subscribe({ topic, fromBeginning: true });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const value = message.value?.toString();
                console.log(value)
            }
        })

    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        consumer.disconnect();
    }
}
