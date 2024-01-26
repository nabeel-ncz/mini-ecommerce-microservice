export default (dependencie: any) => {

    const {
        cartRepositories: { addToCart }
    } = dependencie;

    if (!addToCart) {
        throw new Error('Dependency is required for Add product to cart!');
    }

    const interactor = async (
        data: any
    ) => {
        return await addToCart(data);
    }

    return { interactor }
}