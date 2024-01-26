export default (dependencie: any) => {

    const {
        authRepositories: { findByEmail }
    } = dependencie;

    if (!findByEmail) {
        throw new Error('Dependency is required for login!');
    }

    const interactor = async (
        email: string,
    ) => {
        return await findByEmail(email);
    }

    return { interactor }
}