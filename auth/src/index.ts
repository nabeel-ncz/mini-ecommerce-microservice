require('dotenv').config();
import startAppliation from "./app";
import { connectToDatabase } from "./database";

(async () => {
    try {

        startAppliation;

        await connectToDatabase()
            .catch((error: any) => {
                console.log(error);
                process.exit();
            })

    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }
})();