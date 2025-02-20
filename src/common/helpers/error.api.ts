class ApiError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational: boolean = true) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        Error.captureStackTrace(this, this.constructor);
    }
}

class BadRequestError extends ApiError {
    constructor(message: string) {
        super(message, 400);
    }
}

class NotFoundError extends ApiError {
    constructor(message: string) {
        super(message, 404);
    }
}

class InternalServerError extends ApiError {
    constructor(message: string) {
        super(message, 500);
    }
}

export { ApiError, BadRequestError, NotFoundError, InternalServerError };