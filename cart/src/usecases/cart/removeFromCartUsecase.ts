export default (dependencie: any) => {

    const {
        cartRepositories: { removeProductFromCart }
    } = dependencie;

    if (!removeProductFromCart) {
        throw new Error('Dependency is required for remove product from cart!');
    }

    const interactor = async (
        data: any,
    ) => {
        return await removeProductFromCart(data);
    }

    return { interactor }
}