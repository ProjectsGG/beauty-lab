<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProceduresWebController extends Controller
{
    public function index()
    {
        return view('procedures');
    }
}
