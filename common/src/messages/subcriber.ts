export interface ISubscriber {
    userCreated(data: any): Promise<void>;
    userUpdated(data: any): Promise<void>;
    productCreated(data: any): Promise<void>;
    productUpdated(data: any): Promise<void>;
}
