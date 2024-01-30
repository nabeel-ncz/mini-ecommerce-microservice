export default (dependencie: any) => {

    const {
        userRepositories: { unblockUser }
    } = dependencie;

    if (!unblockUser) {
        throw new Error('Dependency is required for un-block user!');
    }

    const interactor = async (
        id: string
    ) => {
        return await unblockUser(id);
    }

    return { interactor }
}