import addAddressController from "./addAddressController";
import deleteAddressController from "./deleteAddressController";

export default (dependencie: any) => {
    return {
        addAddressController: addAddressController(dependencie),
        deleteAddressController: deleteAddressController(dependencie)
    }
}