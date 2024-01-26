export default (dependencie: any) => {

    const {
        cartRepositories: { getCart }
    } = dependencie;

    if (!getCart) {
        throw new Error('Dependency is required for get products from cart!');
    }

    const interactor = async (
        userId: string
    ) => {
        return await getCart(userId);
    }

    return { interactor }
}