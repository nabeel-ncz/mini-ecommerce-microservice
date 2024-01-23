export interface IProductDependencie {
    productUsecase: {
        createProductUsecase: (dependencie: IProductDependencie) => { interactor: Function },
        updateProductUsecase: (dependencie: IProductDependencie) => { interactor: Function },
        getAllProductUsecase: (dependencie: IProductDependencie) => { interactor: Function },
    },
    productRepositories: {
        create: Function,
        update: Function,
        findAll: Function,
    }
}