import express, { Request, Response, Application } from "express";
// import {
//   NotAuthorizedError,
//   NotFoundError,
//   errorHandler,
// } from "@nabeel/common";
import userRoutes from "./routes/userRoutes"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"User service ON!"
    })
})

app.use("/api/user", userRoutes);

app.all("*", async (req: Request, res: Response) => {
    res.status(404).json({
        message: "page not found!"
    })
});

app.use(async (error: any, req: Request, res: Response) => {
    res.status(400).json({
        error: error,
        message: "something went wrong!"
    })
});

const port: number = Number(process.env.PORT) || 3001
app.listen(port, () => {
    console.log(`User Service listening at ${port}`);
})

export default app;