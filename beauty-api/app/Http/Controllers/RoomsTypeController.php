<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomsType;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

class RoomsTypeController extends Controller
{

    public function index()
    {
        $roomsType = RoomsType::all();

        return response()->json([
            'ok' => true,
            'data' => $roomsType
        ]);
    }
}
