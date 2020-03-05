<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Plans extends Model
{
    use Notifiable;

    protected $table = 'planes';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primary_key = 'id_plan';
    protected $fillable = [
        'nombre',
        'descripcion',
        'valor',
        'img_plan',
        'id_tipo_habitacion'
    ];
    public $timestamps = false;

}
