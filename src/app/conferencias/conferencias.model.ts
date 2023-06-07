export interface Conferencias{
    id: number;
    hora: string;
    fecha: string;
    lugar: number;
    evento: number; 
}

export interface Lugar {
    id: number;
    nombre: string;
    simultaneos: number;
}