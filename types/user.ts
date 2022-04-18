export interface User {
    id: number;
    username: string;
}

export interface AuthResponse {
    statusCode: number;
    message: string;
    data: {
        accessToken: string;
        user: User;
    };
}