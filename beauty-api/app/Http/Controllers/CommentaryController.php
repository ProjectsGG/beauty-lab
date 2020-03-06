<?php

namespace App\Http\Controllers;

use App\Models\Commentary;
use Illuminate\Http\Request;
use JWTAuth;

class CommentaryController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
    public function comment(Request $request)
    {
        $input = $request->all();
        $input['id_usuario'] = $this->user->id;
        Commentary::create($input);
        return response()->json([
            'ok' => true
        ]);
    }
}
