export default (dependencie: any) => {

    const {
        productRepositories: { updateProduct }
    } = dependencie;

    if (!updateProduct) {
        throw new Error('Dependency is required for update product!');
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
        return await updateProduct(data);
    }

    return { interactor }
}