export default (dependencie: any) => {

    const {
        productRepositories: { update }
    } = dependencie;

    if (!update) {
        throw new Error('Dependency is required for update product!');
    }

    const interactor = async (
        details: any
    ) => {
        return await update(details);
    }

    return { interactor }
}