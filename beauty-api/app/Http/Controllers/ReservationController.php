<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Plans;
use App\Models\Procedures;
use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reservations = DB::table('reservas')
            ->join('usuarios', 'reservas.id_usuario', '=', 'usuarios.id')
            ->leftJoin('planes', 'reservas.id_plan', '=', 'planes.id_plan')
            ->leftJoin('procedimientos', 'reservas.id_procedimiento', '=', 'procedimientos.id_procedimiento')
            ->select(
                'reservas.*',
                'usuarios.nombres',
                'usuarios.apellidos',
                'usuarios.img_perfil',
                'planes.nombre as plan',
                'procedimientos.nombre as procedimiento'
            )
            ->get();

        return response()->json([
            'ok' => true,
            'data' => $reservations
        ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        try {
            $this->saveReservation($input);
            return response()->json([
                'ok' => true,
                'message' => 'Payment succesfully!'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'error' => $th->getMessage()
            ]);
        }
    }
    public function saveReservation($input)
    {
        $now = new \DateTime();
        $plan = Plans::where('id_plan', $input['id_plan'])->first();
        $procedure = Procedures::where('id_procedimiento', $input['id_procedimiento'])->first();
        $name = '';
        if ($procedure !== null) {
            $name = "Your acquired: $procedure->nombre";
        } else {
            $name = "Your acquired: $plan->nombre";
        }
        $reserva = Reservation::create($input);
        History::create([
            'id_reserva' => $reserva->id,
            'fecha' => $now->format('Y-m-d'),
            'hora' => null,
            'titulo' => $name,
            'descripcion' => 'Congratulations on your purchase, the beautylab team will ensure that you live a wonderful experience',
            'usuario_id' => $input['id_usuario']
        ]);
        History::create([
            'id_reserva' => $reserva->id,
            'fecha' => $input['fecha_inicio'],
            'hora' => null,
            'titulo' => 'Surgery date',
            'descripcion' => 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.',
            'usuario_id' => $input['id_usuario']
        ]);
        History::create([
            'id_reserva' => $reserva->id,
            'fecha' => $input['fecha_fin'],
            'hora' => null,
            'titulo' => 'Last Day',
            'descripcion' => 'Until this day you can have accommodation in our center, to have more days you must pay for it.',
            'usuario_id' => $input['id_usuario']
        ]);
    }
    public function storeReservations(Request $request)
    {
        try {
            $input = $request->all();
        foreach ($input['reservations'] as $key => $value) {
            $this->saveReservation($value);
        }
        return response()->json([
            'ok' => true,
            'message' => 'Payment succesfully!'
        ]);
        } catch (\Throwable $th) {
            return response()->json([
                'ok' => false,
                'message' => $th->getMessage()
            ]);
        }
    }
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reservation $reservation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {
        //
    }
}
