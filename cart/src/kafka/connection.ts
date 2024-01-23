import { Kafka, Producer, Consumer } from "kafkajs";

export const kafka = new Kafka({
    clientId: "user-service-broker",
    brokers: ["localhost:9092"]
})

export const producer: Producer = kafka.producer();
export const consumer: Consumer = kafka.consumer({ groupId: "user-service-group" });