export default (dependencie: any) => {

    const {
        userRepositories: { updateProfile }
    } = dependencie;

    if (!updateProfile) {
        throw new Error('Dependency is required for update profile!');
    }

    const interactor = async (
        id: string,
        data: {
            name: string,
            email: string
        }
    ) => {
        return await updateProfile(id, data);
    }

    return { interactor }
}