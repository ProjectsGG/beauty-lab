<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\Reservation;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            Reservation::create($input);

            History::create([
                'fecha' => $input['fecha_inicio'],
                'hora' => null,
                'titulo' => 'Surgery date',
                'descripcion' => 'This day 2 the operation of the procedures you bought will take place, remember to buy your air ticket to Medellin and get in touch with the beautylab team.',
                'usuario_id' => $input['id_usuario']
            ]);
            History::create([
                'fecha' => $input['fecha_fin'],
                'hora' => null,
                'titulo' => 'Last Day',
                'descripcion' => 'Until this day you can have accommodation in our center, to have more days you must pay for it.',
                'usuario_id' => $input['id_usuario']
            ]);
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
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
