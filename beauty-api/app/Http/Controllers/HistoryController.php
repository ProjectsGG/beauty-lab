<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use JWTAuth;

class HistoryController extends Controller
{
    protected $user;

    public function __construct()
    {
        $this->user = JWTAuth::parseToken()->authenticate();
    }
    public function index()
    {

    $plan = Reservation::where('id_usuario', $this->user->id)
    ->with('plan')
    ->first();

      return response()->json([
          'ok' => true,
          'plan' => $plan, 
          'data' => $this->user->history
      ]); 
    }
}
