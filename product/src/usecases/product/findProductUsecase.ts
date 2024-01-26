export default (dependencie: any) => {

    const {
        productRepositories: { findById }
    } = dependencie;

    if (!findById) {
        throw new Error('Dependency is required for product finding!');
    }

    const interactor = async (
        id: string
    ) => {
        return await findById(id);
    }

    return { interactor }
}