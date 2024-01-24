import { Kafka, Producer, Consumer } from "kafkajs";

export const broker = new Kafka({
    clientId: `${process.env.KAFKA_CLIENTID}`,
    brokers: [`${process.env.KAFKA_BROKER_URL}`]
})

export const producer: Producer = broker.producer();
export const consumer: Consumer = broker.consumer({ groupId: "user-service-group" });