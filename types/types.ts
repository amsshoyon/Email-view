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