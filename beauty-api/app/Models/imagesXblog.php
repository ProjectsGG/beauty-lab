<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class imagesXblog extends Model
{
    protected $table = 'imagenesXblog';

    protected $fillable = [
        'id_blog',
        'imagen',
    ];
    public $timestamps = false;
}
