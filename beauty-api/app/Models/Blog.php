<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blog';

    protected $fillable = [
        'id_usuario',
        'descripcion',
        'estado',
        'fecha',
        'hora',
        'likes',
        'reportado'
    ];
    public $timestamps = false;
    public function images()
    {
        return $this->hasMany(imagesXblog::class, 'id_blog');
    }
    public function comments()
    {
        return $this->hasMany(Commentary::class, 'id_blog');
    }
    public function likes()
    {
        return $this->hasMany(Like::class, 'id_blog');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id_usuario');
    }
}
