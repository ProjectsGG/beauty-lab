<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;
class PublicController extends Controller
{
    public function returnBlog($filename)
    {
        $file = Storage::disk('blog')->get($filename);
        return new Response($file);
    }
}
