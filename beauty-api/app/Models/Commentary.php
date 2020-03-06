<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Commentary extends Model
{
    protected $table = 'comentarios';

    protected $fillable = [
        'id_blog',
        'id_usuario',
        'comentario',
        'estado'
    ];
    public $timestamps = false;
}
