<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Rooms;
use Illuminate\Http\Request;


class AdminRoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backOffice/Rooms');
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
        $room = new Rooms();
        $room -> id_habitacion = $request->input('Id');
        $room -> nombre = $request->input('Name');
        $room -> comodidades = $request->input('Amenities');
        $room -> precio_noche = $request->input('NigthPrice');
        $room -> estado = $request->input('Estate');
        $room -> cantidad_camas = $request->input('NumberofBeds');
        $room -> cantidad_camas_disponibles = $request->input('NumberofBedsAvailable');
        $room -> id_tipo_de_habitacion = $request->input('TypeOfRoom');
        $room -> save();

        return redirect()->route('RoomsAdmin')->with('datos','Registro guardado correctamente!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
