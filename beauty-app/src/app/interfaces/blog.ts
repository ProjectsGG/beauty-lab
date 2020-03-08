export interface Blog {
    id?: number;
    id_usuario?: number;
    fecha?: string;
    hora?: string;
    descripcion?: string;
    photos?: any[];
    estado?: boolean;
    likes?: number;
}
