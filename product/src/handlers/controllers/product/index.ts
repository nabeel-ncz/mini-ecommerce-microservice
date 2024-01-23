import create from "./create";
import update from "./update";
import findAll from "./findAll";

export default (dependencie: any) => {
    return {
        createProductController: create(dependencie),
        updateProductController: update(dependencie),
        findAllProductsController: findAll(dependencie)
    }
}