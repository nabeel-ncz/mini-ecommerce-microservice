export default (dependencie: any) => {

    const {
        addressRepositories: { addAddress }
    } = dependencie;

    if (!addAddress) {
        throw new Error('Dependency is required for add address!');
    }

    const interactor = async (
        data: any
    ) => {
        return await addAddress(data);
    }

    return { interactor }
}