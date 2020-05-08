<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $table = 'reservas';

    protected $primary_key = 'id_reserva';
    protected $fillable = [
        'fecha_reserva',
        'fecha_inicio',
        'fecha_fin',
        'estado',
        'id_cotizacion',
        'id_plan',
        'id_procedimiento',
        'id_usuario'
    ];
    public $timestamps = false;
    public function user()
    {
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }
    public function plan()
    {
        return $this->belongsTo(Plans::class, 'id_plan', 'id_plan');
    }
    public function procedure()
    {
        return $this->belongsTo(Procedures::class, 'id_procedimiento', 'id_procedimiento');
    }
    public function history()
    {
        return $this->hasMany(History::class,'id_reserva', 'id_reserva');
    }
}
