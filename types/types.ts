export interface Template {
    id: number
    title: string,
    template: string,
    data: string,
    attachment: string,
    isActive: true,
    serviceId: number
}

export interface Service {
    id: number
    title: string,
    templates?: Template[] | []
}