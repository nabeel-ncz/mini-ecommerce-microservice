export default (dependencie: any) => {

    const {
        productRepositories: { findProduct }
    } = dependencie;

    if (!findProduct) {
        throw new Error('Dependency is required for find product!');
    }

    const interactor = async (
        id: string
    ) => {
        return await findProduct(id);
    }

    return { interactor }
}