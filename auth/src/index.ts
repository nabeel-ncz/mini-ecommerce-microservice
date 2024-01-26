import dotenv from "dotenv";
import startAppliation from "./app";
import { connectToDatabase } from "./database";

(async () => {
    try {
        dotenv.config();
        startAppliation;
        await connectToDatabase();
    } catch (error: any) {
        console.log(`Oops!`, error?.message);
    }   
})();