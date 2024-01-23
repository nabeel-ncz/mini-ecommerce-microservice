export default (dependencie: any) => {

    const {
        cartRepositories: { addProductToCart }
    } = dependencie;

    if (!addProductToCart) {
        throw new Error('Dependency is required for Add product to cart!');
    }

    const interactor = async (
        data: any
    ) => {
        return await addProductToCart(data);
    }

    return { interactor }
}