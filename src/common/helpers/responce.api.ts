interface ApiResponse<T> {
    status: string;
    message: string;
    data?: T;
}

class ResponseApi {
    static success<T>(message: string, data?: T): ApiResponse<T> {
        return {
            status: 'success',
            message,
            data,
        };
    }
}

export { ResponseApi };