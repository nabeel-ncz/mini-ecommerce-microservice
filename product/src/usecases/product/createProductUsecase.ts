export default (dependencie: any) => {

    const {
        productRepositories: { create }
    } = dependencie;

    if (!create) {
        throw new Error('Dependency is required for create product!');
    }

    const interactor = async (
        details: {
            title: string,
            description: string,
            image: string,
            price: string
        }
    ) => {
        return await create(details);
    }

    return { interactor }
}