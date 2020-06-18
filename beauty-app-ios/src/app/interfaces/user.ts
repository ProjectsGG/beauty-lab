export interface User {
    id?: number;
    nombres?: string;
    apellidos?: string;
    movil?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
    direccion?: string;
    identificacion?: string;
    id_pais?: number;
    id_tipo_id?: number;
    username?: string;
    estado?: string;
    fec_registro?: string;
    fecha_cumpleanos?: string;
    ciudad?: string;
    img_perfil?: string;
    bl_points?: number;
    nombre_contacto?: string;
    telefono_contacto?: string;
    rh?: string;
    admin?: number;
    peso?: number;
    estatura?: number;
    medicamentos?: string;
    alucinogenos?: string;
    alergias?: string;
    cirugias_genarales?: string;
    cirugias_plasticas?: string;
    infartos?: string;
    diabetes?: string;
    vih?: string;
    presion_alta?: string;

    user_blocked_id?: number;
    user_id?: number;
}
