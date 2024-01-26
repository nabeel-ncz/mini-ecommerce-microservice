export default (dependencie: any) => {

    const {
        productRepositories: { createProduct }
    } = dependencie;

    if (!createProduct) {
        throw new Error('Dependency is required for creat product!');
    }

    const interactor = async (
        data: {
            title: string;
            stock: number;
            description: string;
            image: string;
            price: number;
            isBlocked: boolean;
        }
    ) => {
        return await createProduct(data);
    }

    return { interactor }
}