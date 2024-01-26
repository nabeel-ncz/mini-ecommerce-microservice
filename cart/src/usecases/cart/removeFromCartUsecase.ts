export default (dependencie: any) => {

    const {
        cartRepositories: { removeFromCart }
    } = dependencie;

    if (!removeFromCart) {
        throw new Error('Dependency is required for remove product from cart!');
    }

    const interactor = async (
        data: any,
    ) => {
        return await removeFromCart(data);
    }

    return { interactor }
}