<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ImagesXBeforeAfter extends Model
{
    protected $table = 'imagenesXantes_despues';

    protected $fillable = [
        'id_referencia',
        'imagen',
        'tipo'
    ];
    public $timestamps = false;
}
