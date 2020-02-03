<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Procedures extends Model
{
    use Notifiable;

    protected $table = 'procedimientos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $primary_key = 'id_procedimiento';
    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'imagen'
    ];
    public $timestamps = false;

}
