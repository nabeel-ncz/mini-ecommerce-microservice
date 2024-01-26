import { CustomError } from './custom-error';
 
export class DatabaseConnectionError extends CustomError {

    public statusCode = 500;

    constructor() {
        super('Database connection error'); 
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
   
    serializeErrors() {
        return [{
            message: 'Error connecting to database'
        }]
    }
};