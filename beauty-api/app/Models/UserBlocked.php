<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserBlocked extends Model
{
    protected $table = 'blog_user_block';

    protected $fillable = [
        'user_id',
        'user_blocked_id'
    ];
    public $timestamps = false;

}
