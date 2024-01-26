import login from "./login";
import signup from "./signup";
import currentUser from "./currentUser";
import logout from "./logout";

export default (dependencie: any) => {
    return {
        loginController: login(dependencie),
        signupController: signup(dependencie),
        currentUserController: currentUser(),
        logoutController: logout()
    }
}