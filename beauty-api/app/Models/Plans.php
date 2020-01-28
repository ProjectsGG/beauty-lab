<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Plans extends Authenticatable implements JWTSubject
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
        'id_habitacion'
    ];
    public $timestamps = false;

}
