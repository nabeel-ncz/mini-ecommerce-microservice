import updateProfileController from "./updateProfileController";
import currentUserController from "./currentUserController";

export default (dependencie: any) => {
    return {
        updateProfileController: updateProfileController(dependencie),
        currentUserController: currentUserController()
    }
}