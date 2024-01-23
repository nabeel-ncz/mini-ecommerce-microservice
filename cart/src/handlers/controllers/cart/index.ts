import addToCart from "./addToCart";
import removeFromCart from "./removeFromCart";

export default (dependencie: any) => {
    return {
        addToCartController: addToCart(dependencie),
        removeFromCartController: removeFromCart(dependencie)
    }
}