export interface IUser {
    id: number;
    nombre: string;
    correo: string;
    cargo: string;
    departamento: string;
    oficina: string;
    estadoCuenta: string;
}


export interface ILoginCredentials {
    correo: string;
    password: string;
}

export interface ISuccessResponse {
    token: string;
    user: {
        id: number;
        nombre: string;
        correo: string;
        cargo: string;
        departamento: string;
        oficina: string;
        estadoCuenta: string;
    };
}

export enum EStatus {
    success = 'success',
    error = 'error',
}
