import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: String(process.env.KAFKA_CLIENT_ID),
    brokers: [`${process.env.KAFKA_BROKER_URLS}`]
});