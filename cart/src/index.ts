require('dotenv').config();
import startAppliation from "./app";
import { connectToDatabase } from "./database";
import { runConsumer, stopConsumer } from "./kafka/consumer";

(async () => {
    try {
        
        startAppliation;

        await connectToDatabase()
            .catch((error: any) => {
                console.log(error);
                process.exit();
            })

        await runConsumer()
            .catch((error: any) => {
                console.info(error);
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