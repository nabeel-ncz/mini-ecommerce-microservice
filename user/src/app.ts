import express, { Request, Response, Application, NextFunction } from "express";

import {
    NotFoundError,
    errorHandler
} from "@nabeelshop/common";

import userRoutes from "./routes/userRoute";
import addressRoutes from "./routes/addressRoute";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"User service ON!"
    })
})

app.use(userRoutes);
app.use(addressRoutes);

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 3001
app.listen(port, () => {
    console.log(`User Service listening at ${port}`);
})

export default app;