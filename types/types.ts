export interface Service {
    name: string,
    id: string | number
}

export interface ServiceGroup {
    name: string,
    id: string | number,
    services: Service[]
}