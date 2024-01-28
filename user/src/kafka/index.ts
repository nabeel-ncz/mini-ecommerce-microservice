import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: String(process.env.KAFKA_CLIENT_ID),
    brokers: [String(process.env.KAFKA_BROKER_URLS)]
});

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({
    groupId: "user-service-kafka-group",
});