export interface IParams {
    limit: number;
    page: number;
}

export interface IEmployee {
    id: number;
    nombre: string;
    correo: string;
    cargo: string;
    departamento: string;
    oficina: string;
    estadoCuenta: string;
}

export interface IEmployeeResponse {
    data: IEmployee[];
    total: number;
}