<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
class UserController extends Controller
{
    public function update(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input,[
            'username' => 'string|min:6|max:15|unique:usuarios',
            'phone' => 'min:8',
        ]);
    }
}
