export interface Template {
    id: number
    title: string,
    template: string,
    data: string,
    attachment: string,
    isActive: true,
    projectId: number
}

export interface Project {
    id: number
    title: string,
    templates?: Template[] | []
}

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