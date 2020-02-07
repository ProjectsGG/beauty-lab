<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImgAreaAffected extends Model
{
    protected $primary_key = 'id_imagen';
    protected $table = 'usuarios_img_zona_afectada';

    protected $fillable = [
        'imagen',
        'id_usuario'
    ];

    
}
