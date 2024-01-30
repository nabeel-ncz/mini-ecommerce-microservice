import getAllUsersController from "./getAllUsersController";
import getUserController from "./getUserController";
import blockUserController from "./blockUserController";
import unblockUserController from "./unblockUserController";

export default (dependencie: any) => {
    return {
        getAllUsersController: getAllUsersController(dependencie),
        getUserController: getUserController(dependencie),
        blockUserController: blockUserController(dependencie),
        unblockUserController: unblockUserController(dependencie)
    }
}