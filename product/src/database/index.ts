import * as productRepositories from "./repositories/product";
import connectToDatabase from "./connection";

export * from "./models/product";

export {
    productRepositories,
    connectToDatabase
}
