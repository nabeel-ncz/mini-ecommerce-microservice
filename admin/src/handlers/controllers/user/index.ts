import getAllUsersController from "./getAllUsersController";
import getUserController from "./getUserController";

export default (dependencie: any) => {
    return {
        getAllUsersController: getAllUsersController(dependencie),
        getUserController: getUserController(dependencie)
    }
}