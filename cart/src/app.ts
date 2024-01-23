import express, { Request, Response, Application } from "express";
// import {
//   NotAuthorizedError,
//   NotFoundError,
//   errorHandler,
// } from "@nabeel/common";
import cartRoutes from "./routes/cartRoutes"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"Cart service ON!"
    })
})

app.use("/api/cart", cartRoutes);

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

const port: number = Number(process.env.PORT) || 3003
app.listen(port, () => {
    console.log(`Cart Service listening at ${port}`);
})

export default app;