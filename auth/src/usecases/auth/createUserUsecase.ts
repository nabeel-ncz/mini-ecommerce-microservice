export default (dependencie: any) => {

    const {
        authRepositories: { create }
    } = dependencie;

    if (!create) {
        throw new Error('Dependency is required for signup!');
    }

    const interactor = async (
        credentials: {
            name: string,
            email: string,
            password: string
        }
    ) => {
        return await create(credentials);
    }

    return { interactor }
}