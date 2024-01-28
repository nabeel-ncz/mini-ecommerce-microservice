import express, {
    Request,
    Response,
    Application,
    NextFunction
} from "express";

import {
    NotFoundError,
    errorHandler
} from "@nabeelshop/common";

import path from "path";
import userRouter from "./routes/userRoutes";
import productRouter from "./routes/productRoutes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Admin service ON!"
    })
})

//image uploads- just for simplicity
app.use('/api/images',express.static(path.join(__dirname,"public","uploads")));

app.use(userRouter);
app.use(productRouter);

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 3002
app.listen(port, () => {
    console.log(`Admin Service listening at ${port}`);
})

export default app;