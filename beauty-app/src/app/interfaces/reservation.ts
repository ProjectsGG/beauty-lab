export interface Reservation {
    fecha_reserva: string;
    fecha_inicio: string;
    fecha_fin: string;
    id_cotizacion?: number;
    id_plan?: number;
    id_procedimiento?: number;
    id_usuario: number;
}
