export default (dependencie: any) => {

    const {
        productRepositories: { findAllProducts }
    } = dependencie;

    if (!findAllProducts) {
        throw new Error('Dependency is required for find all products!');
    }

    const interactor = async (
        page: number, limit: number
    ) => {
        return await findAllProducts(page, limit);
    }

    return { interactor }
}