<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Rooms extends Model
{
    use Notifiable;

    protected $table = 'habitaciones';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primary_key = 'id_habitacion';
    protected $fillable = [
        'nombre',
        'comodidades',
        'precio_noche',
        'estado',
        'cantidad_camas',
        'cantidad_camas_disponibles'
    ];
    public $timestamps = false;

}
