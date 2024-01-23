import express, { Request, Response, Application } from "express";
// import {
//   NotAuthorizedError,
//   NotFoundError,
//   errorHandler,
// } from "@nabeel/common";
import productRoutes from "./routes/productRoutes"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"Product service ON!"
    })
})

app.use("/api/product", productRoutes);

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

const port: number = Number(process.env.PORT) || 3002
app.listen(port, () => {
    console.log(`Product service listening at ${port}`);
})

export default app;