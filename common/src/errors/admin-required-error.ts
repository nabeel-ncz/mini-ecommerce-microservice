import { CustomError } from './custom-error';

export class AdminRequiredError extends CustomError {

    public statusCode = 401;
    
    constructor() {
        super('Admin auth required!');
        Object.setPrototypeOf(this, AdminRequiredError.prototype);
    };
    
    serializeErrors() {
        return (
            [{ message: 'Admin auth required!' }]
        );
    };

};