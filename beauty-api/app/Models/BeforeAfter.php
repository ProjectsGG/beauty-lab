<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeforeAfter extends Model
{
    protected $table = 'antes_despues';

    protected $fillable = [
        'id_usuario',
        'cirugias',
    ];
    public $timestamps = false;
    public function user()
    {
        return $this->belongsTo(User::class, 'id_usuario');
    }
    public function images()
    {
        return $this->hasMany(ImagesXBeforeAfter::class, 'id_referencia');
    }
}
