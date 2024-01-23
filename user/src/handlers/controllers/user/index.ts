import login from "./login";
import signup from "./signup";

export default (dependencie: any) => {
    return {
        loginController: login(dependencie),
        signupController: signup(dependencie)
    }
}