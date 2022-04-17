export interface User {
    id: number;
    username: string;
}

export interface AuthResponse {
    accessToken: string;
    user: User;
}