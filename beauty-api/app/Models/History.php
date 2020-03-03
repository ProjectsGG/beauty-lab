<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $table = 'historial';

    protected $fillable = [
        'id_reserva',
        'fecha',
        'hora',
        'titulo',
        'descripcion',
        'estado',
        'usuario_id',
    ];
    public $timestamps = false;
}
