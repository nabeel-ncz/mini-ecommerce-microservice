import { CustomError } from './custom-error';

export class UserBlockedError extends CustomError {

    public statusCode = 400;
    
    constructor() {
        super('User blocked');
        Object.setPrototypeOf(this, UserBlockedError.prototype);
    };
    
    serializeErrors() {
        return (
            [{ message: 'You are blocked from the site!' }]
        );
    };

};