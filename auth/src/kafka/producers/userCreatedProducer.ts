import { Producer } from "kafkajs";
import { kafka, topic } from "..";

const producer: Producer = kafka.producer();

export const userCreatedProducer = async (
    data: { 
        id: string, 
        email: string
        name: string,
        password: string,
        isAdmin: boolean,
        isBlocked: boolean
     }
) => {
    try {
        await producer.connect();

        const value = JSON.stringify(data);

        await producer.send({
            topic: topic,
            messages: [
                {
                    value: value
                }
            ]
        })
    } catch (error: any) {
        console.error('kafka produce error : ', error?.message);
    } finally {
        await producer.disconnect();
    }
}