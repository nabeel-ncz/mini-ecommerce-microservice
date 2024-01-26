import createProductController from "./createProductController";
import updateProductController from "./updateProductController";
import getAllProductController from "./getAllProductController";
import getProductController from "./getProductController";

export default (dependencie: any) => {
    return {
        createProductController: createProductController(dependencie),
        updateProductController: updateProductController(dependencie),
        getAllProductController: getAllProductController(dependencie),
        getProductController: getProductController(dependencie)
    }
}