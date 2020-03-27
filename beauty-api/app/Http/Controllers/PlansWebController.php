<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PlansWebController extends Controller
{
    public function index()
    {
        return view('plans');
    }
}
