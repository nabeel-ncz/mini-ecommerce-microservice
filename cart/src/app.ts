import express, { Request, Response, NextFunction, Application } from "express";
import {
  NotFoundError,
  errorHandler
} from "@nabeelshop/common";
import cartRoutes from "./routes/cartRoutes"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"Cart service ON!"
    })
})

app.use(cartRoutes);

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError());
});

app.use(errorHandler);

const port: number = Number(process.env.PORT) || 3003
app.listen(port, () => {
    console.log(`Cart Service listening at ${port}`);
})

export default app;