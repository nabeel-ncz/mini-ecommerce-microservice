import addToCart from "./addToCart";
import removeFromCart from "./removeFromCart";
import getCart from "./getCart";

export default (dependencie: any) => {
    return {
        addToCartController: addToCart(dependencie),
        removeFromCartController: removeFromCart(dependencie),
        getCartController: getCart(dependencie)
    }
}