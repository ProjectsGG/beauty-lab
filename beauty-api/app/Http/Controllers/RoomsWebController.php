<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoomsWebController extends Controller
{
    public function index()
    {
        return view('rooms');
    }
}
