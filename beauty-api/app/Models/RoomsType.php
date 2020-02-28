<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class RoomsType extends Model
{
    use Notifiable;

    protected $table = 'tipo_habitaciones';

    protected $primary_key = 'id_tipo_habitacion';
    protected $fillable = [
        'nombre'
    ];

    public $timestamps = false;

}
