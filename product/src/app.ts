import express, { Request, Response, NextFunction, Application } from "express";
import {
    NotFoundError,
    errorHandler,
} from "@nabeelshop/common";
import productRoutes from "./routes/productRoutes"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Product service ON!"
    })
})

app.use(productRoutes);

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 3002
app.listen(port, () => {
    console.log(`Product service listening at ${port}`);
})

export default app;