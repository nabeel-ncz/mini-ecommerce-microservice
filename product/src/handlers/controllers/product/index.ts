import getAllProductsController from "./getAllProductsController";
import getProductController from "./getProductController";

export default (dependencie: any) => {
    return {
        getAllProductsController: getAllProductsController(dependencie),
        getProductController: getProductController(dependencie)
    }
}