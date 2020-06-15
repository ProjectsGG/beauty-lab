export interface Purchase {
    user_id?: string;
    fecha_reserva?: string;
    fecha_inicio?: string;
    fecha_fin?: string;
    procedures?: any[];
    plans?: any[];
    room: any;
    date?: string;
    ok: boolean;
}
