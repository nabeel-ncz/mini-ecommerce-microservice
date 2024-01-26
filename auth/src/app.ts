import express, { Request, Response, Application } from "express";
import {
    NotFoundError,
    errorHandler
} from "@nabeelshop/common";
import authRoutes from "./routes/authRoutes"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"User service ON!"
    })
})

app.use("/api/auth", authRoutes);

app.all("*", async (req: Request, res: Response) => {
    throw new NotFoundError();
});

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 3001
app.listen(port, () => {
    console.log(`User Service listening at ${port}`);
})

export default app;