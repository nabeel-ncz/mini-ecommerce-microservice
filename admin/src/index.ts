require('dotenv').config();
import startAppliation from "./app";
import { connectToDatabase } from "./database";
import { runConsumer, stopConsumer } from "./kafka/consumer";

(async () => {
    try {

        await runConsumer()
            .catch((error: any) => {
                console.info(error);
            })

        startAppliation;

        await connectToDatabase()
            .catch((error: any) => {
                console.log(error);
                process.exit();
            })

        process.on('SIGTERM', async () => {
            console.info("SIGTERM received")
            console.log("consumer stopping");
            stopConsumer();
        })

    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
})();