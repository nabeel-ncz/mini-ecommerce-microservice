export default (dependencie: any) => {

    const {
        productRepositories: { findAll }
    } = dependencie;

    if (!findAll) {
        throw new Error('Dependency is required for product finding!');
    }

    const interactor = async (
        page: number, limit: number
    ) => {
        return await findAll(page, limit);
    }

    return { interactor }
}