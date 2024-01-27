import * as userRepositories from "./repositories/user";
import * as addressRepositories from "./repositories/address";
import connectToDatabase from "./connection";

export {
    connectToDatabase,
    userRepositories,
    addressRepositories
}
