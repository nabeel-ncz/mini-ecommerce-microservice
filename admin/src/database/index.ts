export * from "./models/user";
export * from "./models/product";
export * as userRepositories from "./repositories/user";
export * as productRepositories from "./repositories/product";

import connectToDatabase from "./connection";

export { connectToDatabase }