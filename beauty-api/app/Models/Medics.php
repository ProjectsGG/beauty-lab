<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Medics extends Model
{
    use Notifiable;

    protected $table = 'medicos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primary_key = 'id_medico';
    protected $fillable = [
        'id_medico',
        'nombres',
        'apellidos',
        'identificacion',
        'celular',
        'email',
        'presentacion',
        'esp_senos',
        'esp_caderas',
        'esp_liposuccion',
        'esp_rinoplastia',
        'esp_sonrisa',
        'id_usuario'
    ];
    public $timestamps = false;

}
